import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components";
import { TouchableOpacity } from "react-native";

interface ThemeProps {
  theme: DefaultTheme;
}
export type FilterStyleProps = {
  isActive?: boolean;
};
export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }: ThemeProps & FilterStyleProps) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}
  border-radius: 4px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;  
