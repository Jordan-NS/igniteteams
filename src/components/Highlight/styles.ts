import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

type ThemeProps = {
  theme: DefaultTheme;
}

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }: ThemeProps) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }: ThemeProps) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: ThemeProps) => theme.COLORS.WHITE};
`;
export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }: ThemeProps) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: ThemeProps) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_300};
`;
