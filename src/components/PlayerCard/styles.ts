import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

interface ThemeProps {
  theme: DefaultTheme;
}

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;  

export const Name = styled.Text`
  flex: 1;
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;    

export const Icon = styled(MaterialIcons).attrs(({ theme }: ThemeProps) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-right: 4px;
`;    