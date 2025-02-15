import { Button } from "@/src/components/Button";
import { Container, Content, Icon } from "./styles";
import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
import { Input } from "@/src/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@/src/storage/group/groupCreate";
import { Alert } from "react-native";
import { AppError } from "@/src/utils/AppError";

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNewGroup() {
    try {
      if(group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome da turma.');
      }
      
      await groupCreate(group);
      navigation.navigate('players', { group });
      
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Não foi possível criar o grupo', error.message);
      } else {
        Alert.alert('Não foi possível criar o grupo');
      }
    }
  }
  
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}