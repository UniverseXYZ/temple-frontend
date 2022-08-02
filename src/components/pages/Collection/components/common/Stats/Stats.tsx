import React, { useEffect } from 'react';
import { Box, HStack, useColorMode } from '@chakra-ui/react';
import { InfoTooltip } from '@/components/common';
import { Ethereum } from '@/components/icons';
import { useState, } from 'react';

import {
  FolderIcon,
  UserIcon,
  TransferIcon,
  DollarIcon,
  DollarUpIcon,
  DollarDownIcon,
} from '@/components/icons';

import { Skeleton } from './Skeleton';

import cn from 'classnames';
import styles from './Stats.module.sass';

interface Props {
  isLoading: boolean;
  floorPrice: number;
  volume: number;
  tokenCount: number;
  ownerCount: number;
  topBid: number;
}

export const Stats = (props: Props) => {
  const { isLoading, floorPrice, volume , tokenCount, ownerCount, topBid} = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <FolderIcon className={styles.Icon} />
              <Box className={styles.Headline}>Items</Box>
            </HStack>
            <Box className={styles.Value}>{tokenCount}</Box>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <UserIcon className={styles.Icon} />
              <Box className={styles.Headline}>Owners</Box>
            </HStack>
            <Box className={styles.Value}>{ownerCount}</Box>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarIcon className={styles.Icon} />
              <Box className={styles.Headline}>Market cap</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>{(floorPrice * tokenCount).toFixed(0)}</Box>
            </HStack>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarUpIcon className={styles.Icon} />
              <Box className={styles.Headline}>Highest bid</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>{topBid.toFixed(0)}</Box>
            </HStack>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <TransferIcon className={styles.Icon} />
              <Box className={styles.Headline}>Volume traded</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>{volume.toFixed(0)}</Box>
            </HStack>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarDownIcon className={styles.Icon} />
              <Box className={styles.Headline}>
                <HStack>
                  <Box>Floor price</Box>
                  <InfoTooltip
                    variant="white"
                    label="The lowest recorded listing price for items this collection."
                  />
                </HStack>
              </Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>{floorPrice}</Box>
            </HStack>
          </Box>
        </Box>
      )}
    </>
  );
};
