import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

type ThemeProps = {
  theme: DefaultTheme;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }: ThemeProps) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;