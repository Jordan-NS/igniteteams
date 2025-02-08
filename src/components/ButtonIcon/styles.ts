import styled, { ThemeProps } from "styled-components/native";
import { DefaultTheme } from "styled-components";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
  theme: DefaultTheme;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  border-radius: 6px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }: Props) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
