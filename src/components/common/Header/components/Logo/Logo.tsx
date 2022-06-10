import React from 'react';
import { Box, HStack, useColorMode } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './Logo.module.sass';

import { Icon, Text } from './components';

export const Logo = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box className={cn(isDark && styles.Dark)}>
      <HStack spacing="7px">
        <Icon className={styles.Icon} />
        <Text className={styles.Text} />
      </HStack>
    </Box>
  );
};
