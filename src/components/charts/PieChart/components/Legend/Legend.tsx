import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { PriceTicker } from '@/components/common';
import { Ethereum } from '@/components/icons';

import cn from 'classnames';
import styles from './Legend.module.sass';

export const Legend: FC = (props: any) => {
  //
  const { payload, onMouseEnter, onMouseLeave } = props;

  console.log('payload', payload);

  const handleMouseEnter = (key: number) => {
    onMouseEnter(key);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  return (
    <Box className={styles.Wrapper}>
      {payload.map((item: any, index: number) => (
        <Box
          key={`item-${index}`}
          className={styles.Item}
          onMouseEnter={() => handleMouseEnter(item.payload.dataKey)}
          onMouseLeave={handleMouseLeave}
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
