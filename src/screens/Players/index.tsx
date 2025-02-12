import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@/src/components/Header";
import { ButtonIcon } from "@/src/components/ButtonIcon";
import { Highlight } from "@/src/components/Highlight";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { Filter } from "@/src/components/Filter";
import { PlayerCard } from "@/src/components/PlayerCard"; 
import { ListEmpty } from "@/src/components/ListEmpty";
import { Container, Form, HeaderList, NumberOfPlayers } from "@/src/screens/Players/styles";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string;
} 

export function Players() {
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const [team, setTeam] = useState<string[]>(["Time A", "Time B"]);
  const [teamSelected, setTeamSelected] = useState<string>("");
  const [players, setPlayers] = useState<string[]>(["João", "Maria", "Pedro", "Ana", "Luiz", "John", "Doe"]);
  
  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera e separe os times" />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList 
          data={team}
          keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Filter
            title={item}
            isActive={teamSelected === item}
            onPress={() => setTeamSelected(item)}
          />
        )}
        horizontal
          showsHorizontalScrollIndicator={false}
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse grupo" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}