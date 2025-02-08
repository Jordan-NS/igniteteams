import { Container } from './styles';
import { Header } from '@/src/components/Header';
import { Highlight } from '@/src/components/Highlight';
import { GroupCard } from '@/src/components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Button } from '@/src/components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootParamList = {
  groups: undefined;
  newGroup: undefined;
  players: { group: string };
}

type Props = {
  navigation: NativeStackNavigationProp<RootParamList, 'groups'>;
}


export function Groups({ navigation }: Props) {
  const [groups, setGroups] = useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

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
            onPress={() => {}}
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



