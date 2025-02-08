import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@/src/assets/logo.png";
import { useNavigation } from "@react-navigation/native";
type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}