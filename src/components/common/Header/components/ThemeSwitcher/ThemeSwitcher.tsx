import React, { FC } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

import { LightThemeIcon, DarkThemeIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './ThemeSwitcher.module.sass';

export const ThemeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <Box
      as="button"
      className={cn(styles.Swither, isDark && styles.Dark)}
      onClick={toggleColorMode}
    >
      {colorMode === 'dark' ? (
        <LightThemeIcon
          boxSize="18px"
          className={cn(styles.Icon, styles.IconLight)}
        />
      ) : (
        <DarkThemeIcon
          boxSize="18px"
          className={cn(styles.Icon, styles.IconDark)}
        />
      )}
    </Box>
  );
};
