import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components";
import { TouchableOpacity } from "react-native";

type ThemeProps = {
  theme: DefaultTheme;
}

type Props = {
  type: ButtonTypeStyleProps;
}

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

export const Container = styled(TouchableOpacity)<Props>` 
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }: ThemeProps & Props) => type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;