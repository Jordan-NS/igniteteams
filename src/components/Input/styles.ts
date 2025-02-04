import styled from "styled-components/native";
import { TextInput } from "react-native";
import { DefaultTheme } from "styled-components";

export const Container = styled(TextInput).attrs(({ theme }: DefaultTheme) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_700};
  color: ${({ theme }: DefaultTheme) => theme.COLORS.WHITE};
`;
