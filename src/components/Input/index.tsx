import { Container } from "./styles";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}
export function Input({ inputRef, ...rest }: Props) {
  return <Container
    ref={inputRef}
    {...rest}
  />;
}
