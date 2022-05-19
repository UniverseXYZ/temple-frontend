import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
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

interface Props {
  isLoading: boolean;
}

export const Stats = (props: Props) => {
  //
  const { isLoading } = props;

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Box className={styles.Wrapper}>
          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <FolderIcon className={styles.Icon} />
              <Box className={styles.Headline}>Items</Box>
            </HStack>
            <Box className={styles.Value}>5242</Box>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <UserIcon className={styles.Icon} />
              <Box className={styles.Headline}>Owners</Box>
            </HStack>
            <Box className={styles.Value}>354</Box>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarIcon className={styles.Icon} />
              <Box className={styles.Headline}>Market cap</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>10544</Box>
            </HStack>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <DollarUpIcon className={styles.Icon} />
              <Box className={styles.Headline}>Highest sale</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>24.55</Box>
            </HStack>
          </Box>

          <Box className={styles.Item}>
            <HStack spacing="6px" justifyContent="center" mb="10px">
              <TransferIcon className={styles.Icon} />
              <Box className={styles.Headline}>Volume traded</Box>
            </HStack>
            <HStack spacing="6px" justifyContent="center">
              <Ethereum w="16px" h="26px" />
              <Box className={styles.Value}>243.6</Box>
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
              <Box className={styles.Value}>0.62</Box>
            </HStack>
          </Box>
        </Box>
      )}
    </>
  );
};
