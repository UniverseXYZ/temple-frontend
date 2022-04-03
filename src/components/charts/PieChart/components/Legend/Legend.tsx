import React, { FC } from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { PriceTicker } from '@/components/common';
import { Ethereum } from '@/components/icons';
//import { } from 'recharts';

import cn from 'classnames';
import styles from './Legend.module.sass';

export const Legend: FC<any> = (props: any) => {
  //
  const {
    payload,
    //onLegendEnter,
    //onLegendLeave
  } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  // const handleMouseEnter = (key: number) => {
  //   onLegendEnter && onLegendEnter(key);
  // };

  // const handleMouseLeave = () => {
  //   onLegendLeave && onLegendLeave();
  // };

  return (
    <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
      {payload.map((item: any, index: number) => (
        <Box
          key={`item-${index}`}
          className={styles.Item}
          // onMouseEnter={() => handleMouseEnter(item.payload.dataKey)}
          // onMouseLeave={handleMouseLeave}
        >
          <Box className={styles.Border} bgColor={item.color} />
          <Box className={styles.Title}>{item.payload.name}</Box>
          <Flex align="center">
            <Ethereum />
            <Box className={styles.Value}>{item.payload.value}</Box>
            <PriceTicker value={12.24} vector="up" />
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
