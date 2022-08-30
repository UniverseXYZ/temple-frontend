import React from 'react';
import { Box, HStack, Image, useColorMode } from '@chakra-ui/react';
import { TransactionBadge, CopyableText } from '@/components/common';
import { Tooltip } from '@/components/ui';
import { Ethereum, ExternalLink } from '@/components/icons';

import { truncateEthAddress } from '@/utils/';

import cn from 'classnames';
import styles from './ActivityList.module.sass';
import dayjs from 'dayjs';

import { data } from './mock/data';

export const ActivityList = (props: any) => {
  //
  const {activity} = props;
  console.log("ACTIVITY", activity)
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box className={cn(styles.Table, isDark && styles.Dark)}>
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
        {activity.map((item: any, index: number) => (
          <Box key={index} className={cn(styles.Row, styles.Item)}>
            <Box className={styles.Cell}>
              <HStack spacing="20px">
                <Box className={styles.Image}>
                  <Image width="100px" src={item.token.tokenImage || item.collection.collectionImage} alt={item.collection.collectionName} />
                </Box>
                <Box>
                  <Box className={styles.Title}>{item.token.tokenName || item.collection.collectionName}</Box>
                  {/* <Box className={styles.Description}>{item.collection}</Box> */}
                </Box>
              </HStack>
            </Box>
            <Box className={styles.Cell}>
              <TransactionBadge size="md" status={item.type} />
            </Box>
            <Box className={styles.Cell}>
              <Box className={styles.Address}>
                <CopyableText value={item.fromAddress}>
                  {truncateEthAddress(item.fromAddress, 0)}
                </CopyableText>
              </Box>
            </Box>
            <Box className={styles.Cell}>
              <Box className={styles.Address}>
                <CopyableText value={item.toAddress}>
                  {truncateEthAddress(item.toAddress, 0)}
                </CopyableText>
              </Box>
            </Box>
            <Box className={styles.Cell}>
              <Box className={styles.Time}>
                <Tooltip
                  label={dayjs(new Date(item.timestamp * 1000)).format('MMMM DD, YYYY at h')}
                >
                    <HStack display="inline-flex">
                      <Box>{dayjs(new Date(item.timestamp * 1000)).fromNow()}</Box>
                      {/* <ExternalLink /> */}
                    </HStack>
                </Tooltip>
              </Box>
            </Box>
            <Box className={styles.Cell}>
              <HStack display="inline-flex">
                <Ethereum />
                <Box className={styles.Price}>{item.price}</Box>
              </HStack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
