import { Button } from "@/src/components/Button";
import { Container, Content, Icon } from "./styles";
import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
export function NewGroup() {
  return (
    <Container>
      <Header showBackButton/>
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />

        <Button
          title="Criar"
        />
      </Content>
    </Container>
  );
}