import { useState, useEffect, useRef } from 'react';
import { FlatList, Alert, TextInput } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';

import { AppError } from '@/src/utils/AppError';

import { PlayerStorageDTO } from '@/src/storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '@/src/storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from '@/src/storage/player/playersGetByGroupAndTeam';

import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
import { ButtonIcon } from "@/src/components/ButtonIcon";
import { Filter } from "@/src/components/Filter";
import { Input } from "@/src/components/Input";
import { PlayerCard } from '@/src/components/PlayerCard';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Button } from '@/src/components/Button';

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { playerRemoveByGroup } from '@/src/storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@/src/storage/group/groupRemoveByName';


type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const navigation = useNavigation();
  const route = useRoute();

  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();
      setNewPlayerName('');
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
    }
  }

  async function handleRemoveGroupConfirm() {
    try {
      await groupRemoveByName(group);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Remover grupo', 'Não foi possível remover o grupo.');
    }
  }

  async function handleRemoveGroup() {
    Alert.alert(
      'Remover grupo',
      'Tem certeza que deseja remover esse grupo?',
      [
        { text: 'Cancelar' },
        { text: 'Remover', onPress: handleRemoveGroupConfirm }
      ]
    )
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="send"
        />

        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </Container>
  )
}