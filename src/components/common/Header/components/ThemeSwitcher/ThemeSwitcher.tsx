import React, { FC } from 'react';
import { useColorMode } from '@chakra-ui/react';

import { IconButton } from '@/components/common';
import { LightThemeIcon, DarkThemeIcon } from '@/components/icons';

export const ThemeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={isDark ? <LightThemeIcon /> : <DarkThemeIcon />}
    />
  );
};
