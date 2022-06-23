import React from 'react';
import {
  Box,
  Flex,
  Image,
  Center,
  useColorMode,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { Ethereum } from '@/components/icons';
import { PriceTicker, Avatar, BundleTag } from '@/components/common';

import cn from 'classnames';
import styles from './Tooltip.module.sass';

export const Tooltip = (props: any) => {
  //
  const { payload } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const fill = payload[0]?.payload.fill;

  //const { data } = payload[0]?.payload;

  return (
    <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
      <Box className={styles.Image}>
        <Image
          src="/mocks/collection-card-image.png"
          alt="Collection Background"
        />
      </Box>

      <Box className={styles.Avatar}>
        <Avatar
          image="/mocks/collection-card-avatar.png"
          name="Collection Name"
          boxSize="68px"
        />
      </Box>

      <BundleTag className={styles.Bundle}>7</BundleTag>

      <Box className={styles.Content}>
        <Box className={styles.Title}>{payload[0]?.name}</Box>

        <SimpleGrid columns={4} spacing={0} className={styles.Stats}>
          <Box className={styles.Stats__Item}>
            <Box className={styles.Stats__Headline}>Items</Box>
            <Box className={styles.Stats__Value}>63K</Box>
          </Box>
          <Box>
            <Box className={styles.Stats__Headline}>Owners</Box>
            <Box className={styles.Stats__Value}>63K</Box>
          </Box>
          <Box>
            <Box className={styles.Stats__Headline}>Floor</Box>
            <Box className={styles.Stats__Value}>63K</Box>
          </Box>
          <Box>
            <Box className={styles.Stats__Headline}>Volume</Box>
            <Box className={styles.Stats__Value}>63K</Box>
          </Box>
        </SimpleGrid>

        <Box className={styles.OwnedValue__Wrapper}>
          <Box className={styles.OwnedValue__Title}>Owned Value</Box>
          <Center>
            <Flex align="center">
              <Ethereum />
              <Box className={styles.OwnedValue__Value}>
                {payload[0]?.value}
              </Box>
              <PriceTicker value={12.24} vector="up" />
            </Flex>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
