import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

type ThemeProps = {
  theme: DefaultTheme;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${({ theme }: ThemeProps) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: ThemeProps) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_300};
`;
