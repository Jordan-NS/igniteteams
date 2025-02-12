import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components";
import { SafeAreaView } from 'react-native-safe-area-context';
interface ThemeProps {
  theme: DefaultTheme;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 36px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;  