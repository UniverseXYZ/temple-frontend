import React from 'react';
import { Box, HStack, useColorMode } from '@chakra-ui/react';
import { InfoTooltip } from '@/components/common';
import { Ethereum } from '@/components/icons';

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
import { ICollection } from '../../../Collection'

interface Props {
  isLoading: boolean;
  collection: ICollection;
}

export const Stats = (props: Props) => {
  //
  const { isLoading, collection } = props;

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
            <Box className={styles.Value}>{collection.tokenCount}</Box>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <UserIcon className={styles.Icon} />
              <Box className={styles.Headline}>Owners</Box>
            </HStack>
            <Box className={styles.Value}>{collection.ownerCount}</Box>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarIcon className={styles.Icon} />
              <Box className={styles.Headline}>Market cap</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>{(Number(collection.tokenCount) * Number(collection.floorAsk.price)).toFixed(0)}</Box>
            </HStack>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarUpIcon className={styles.Icon} />
              <Box className={styles.Headline}>Highest Bid</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>{Number(collection.topBid.value).toFixed(3)}</Box>
            </HStack>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <TransferIcon className={styles.Icon} />
              <Box className={styles.Headline}>Volume traded</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>{collection.volume.allTime.toFixed(0)}</Box>
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
              <Box className={styles.Value}>{Number(collection.floorAsk.price).toFixed(3)}</Box>
            </HStack>
          </Box>
        </Box>
      )}
    </>
  );
};
