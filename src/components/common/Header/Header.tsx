import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Spacer,
  Box,
  Image,
  HStack,
  useColorMode,
} from '@chakra-ui/react';

import {
  Logo,
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
          <Box>
            <Link to="/">
              <Logo />
            </Link>
          </Box>

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
