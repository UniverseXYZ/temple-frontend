import React from 'react';
import { Box, HStack, Image } from '@chakra-ui/react';
import { TransactionBadge } from '@/components/common';
import { Ethereum } from '@/components/icons';

import { truncateEthAddress } from '@/utils/';

import cn from 'classnames';
import styles from './ActivityList.module.sass';

import { data } from './mock/data';

export const ActivityList = (props: any) => {
  //
  const {} = props;
  return (
    <Box className={styles.Table}>
      <Box></Box>

      <Box className={styles.Head}>
        <Box className={styles.Row}>
          <Box className={styles.Cell}>Item</Box>
          <Box className={styles.Cell}>Action</Box>
          <Box className={styles.Cell}>From</Box>
          <Box className={styles.Cell}>To</Box>
          <Box className={styles.Cell}>Time</Box>
          <Box className={styles.Cell}>Price</Box>
        </Box>
      </Box>

      <Box className={styles.List}>
        {data.map((item: any, index: number) => (
          <Box key={index} className={cn(styles.Row, styles.Item)}>
            <Box className={styles.Cell}>
              <HStack spacing="20px">
                <Box className={styles.Image}>
                  <Image src={item.image} alt={item.collection} />
                </Box>
                <Box>
                  <Box className={styles.Title}>{item.item}</Box>
                  <Box className={styles.Description}>{item.collection}</Box>
                </Box>
              </HStack>
            </Box>
            <Box className={styles.Cell}>
              <TransactionBadge size="md" status={item.activity_type} />
            </Box>
            <Box className={styles.Cell}>
              <Box className={styles.Address}>
                {truncateEthAddress(item.from, 0)}
              </Box>
            </Box>
            <Box className={styles.Cell}>
              <Box className={styles.Address}>
                {truncateEthAddress(item.to, 0)}
              </Box>
            </Box>
            <Box className={styles.Cell}>
              <Box className={styles.Time}>{item.timestamp}</Box>
            </Box>
            <Box className={styles.Cell}>
              <HStack>
                <Ethereum />
                <Box className={styles.Price}>{item.amount}</Box>
              </HStack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
