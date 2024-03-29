import React from 'react';
import { useColorMode } from '@chakra-ui/react';

import { Tooltip } from '@/components/ui';
import { IconButton } from '@/components/common';
import { LightThemeIcon, DarkThemeIcon } from '@/components/icons';

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <Tooltip
      label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      placement="bottom"
    >
      <IconButton
        onClick={toggleColorMode}
        icon={isDark ? <LightThemeIcon /> : <DarkThemeIcon />}
      />
    </Tooltip>
  );
};
