import React from 'react';
import { Box, Flex, HStack, Image, useColorMode } from '@chakra-ui/react';

import { TransactionBadge } from '@/components/common';
import { Ethereum } from '@/components/icons';

import { truncateEthAddress } from '@/utils/';

import cn from 'classnames';
import styles from './RecentActivity.module.sass';

import { data } from './mock/data';

export const RecentActivity = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box className={cn(styles.List, isDark && styles.Dark)}>
      {data.map((item, index) => (
        <Box key={index} className={styles.Item}>
          <Flex align="center">
            <Box className={styles.Image}>
              <Image src={item.image} alt="" />
            </Box>
            <Box className={styles.Details}>
              <HStack spacing="8px" className={styles.Title}>
                <Box>{item.username}</Box>
                <TransactionBadge status={item.activity_type} />
              </HStack>

              <HStack className={styles.ActionDetails} spacing="4px">
                <Box>From</Box>
                <Box className={styles.ActitionAddress}>
                  {truncateEthAddress(item.from, 0)}
                </Box>
                <Box>to</Box>
                <Box className={styles.ActitionAddress}>
                  {truncateEthAddress(item.to, 0)}
                </Box>
                <Box>Link</Box>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Ethereum />
                <Box className={styles.Price}>{item.amount}</Box>
              </HStack>
              <Box className={styles.Timestamp}>{item.timestamp}</Box>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
