import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, HStack, useColorMode } from '@chakra-ui/react';

import {
  Logo,
  BackButton,
  ThemeSwitcher,
  SettingsModal,
  WalletsButton,
  SearchInput,
} from './components';

import cn from 'classnames';
import styles from './Header.module.sass';

import { WalletsModalProvider } from './context/WalletsModalContext';

const Header = () => {
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <WalletsModalProvider>
      <Box className={cn(styles.Header, isDark && styles.Dark)}>
        <Flex justify="space-between">
          <HStack spacing="20px">
            <BackButton />
            <Link to="/">
              <Logo />
            </Link>
          </HStack>

          <SearchInput />

          <HStack spacing="10px">
            <ThemeSwitcher />
            <SettingsModal />
            <WalletsButton />
          </HStack>
        </Flex>
      </Box>
    </WalletsModalProvider>
  );
};

export default Header;
