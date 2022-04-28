import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { Ethereum } from '@/components/icons';
import { PriceTicker } from '@/components/common';

import cn from 'classnames';
import styles from './Tooltip.module.sass';

export const Tooltip = (props: any) => {
  //
  const { payload } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const fill = payload[0]?.payload.fill;

  return (
    <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
      <Box className={styles.Border} style={{ backgroundColor: fill }} />
      <Box className={styles.Content}>
        <Box className={styles.Title}>{payload[0]?.name}</Box>
        <Flex align="center">
          <Ethereum />
          <Box className={styles.Value}>{payload[0]?.value}</Box>
          <PriceTicker value={12.24} vector="up" />
        </Flex>
      </Box>
    </Box>
  );
};
