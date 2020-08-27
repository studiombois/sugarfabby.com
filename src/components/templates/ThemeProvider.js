import useDarkMode from '@hooks/useDarkMode';
import { theme } from '@lib/theme/theme';
import React from 'react';
import {
  ThemeContext,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  return themeContext;
};

const ThemeProvider = (props) => {
  const [mode, avatar, toggleTheme] = useDarkMode();
  return (
    <StyledThemeProvider theme={{ ...theme, mode, avatar, toggleTheme }}>
      {props.children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
