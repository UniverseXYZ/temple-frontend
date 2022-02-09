import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer, Box, Image, useColorMode } from '@chakra-ui/react';

import { ThemeSwitcher } from './components';

import cn from 'classnames';
import styles from './Header.module.sass';

const Header: FC = () => {
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <Box className={cn(styles.Header, isDark && styles.Dark)}>
      <Flex>
        <Box>
          <Link to="/">
            <Image src="/assets/images/logo.svg" alt="Temple" />
          </Link>
        </Box>
        <Spacer />
        <ThemeSwitcher />
      </Flex>
    </Box>
  );
};

export default Header;
