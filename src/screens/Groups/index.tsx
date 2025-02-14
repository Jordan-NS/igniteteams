import { Container } from './styles';
import { Header } from '@/src/components/Header';
import { Highlight } from '@/src/components/Highlight';
import { GroupCard } from '@/src/components/GroupCard';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Button } from '@/src/components/Button';
import { useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@/src/storage/group/groupsGetAll';
import { useFocusEffect } from '@react-navigation/native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();
  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}



