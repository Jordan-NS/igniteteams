import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'styled-components';

type ThemeProps = {
  theme: DefaultTheme;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_600};
  padding: 24px;
`;
