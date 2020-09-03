import { useLayoutEffect, useState } from 'react';

const useDarkMode = () => {
  const [mode, setMode] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && window.__theme) {
      setMode(mode || window.__theme);
      setAvatar(window.__avatar);
    }
  }, [mode]);

  const toggleTheme = (isSwitchOn) => {
    if (isSwitchOn) {
      setMode('dark');
      window.__setPreferredTheme('dark');
    } else {
      setMode('light');
      window.__setPreferredTheme('light');
    }
  };

  return [mode, avatar, toggleTheme];
};

export default useDarkMode;
