import React from 'react';
import {
  Box,
  Image,
  Flex,
  HStack,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { Card } from '@/components/common';
import { Ethereum } from '@/components/icons';

import cn from 'classnames';
import styles from './NftCard.module.sass';

interface Props {
  item: NftItem;
}

interface Collection {
  floorAskPrice: string;
}

interface NftItem {
  name: string;
  image: string;
  collection: Collection;
  isSound?: boolean;
  isVideo?: boolean;
}

export const NftCard = (props: Props) => {
  //
  const { item } = props;
  const { isSound, isVideo } = props.item;

  const { colorMode } = useColorMode();

  const isHaveTags = isSound || isVideo;

  return (
    <Box className={styles.Wrapper}>
      <Card
        className={cn(styles.Card, colorMode === 'dark' && styles.Dark)}
        hover
      >
        <Box className={styles.Image}>
          <Image src={item.image} alt={item.name} />

          {isHaveTags && (
            <Box className={styles.Tags}>
              {isSound && <Box></Box>}
              {isVideo && <Box></Box>}
            </Box>
          )}
        </Box>

        <Box className={styles.Info}>
          <Box className={styles.Title}>{item.name}</Box>
          <Box className={styles.Footer}>
            <Flex>
              <Box textAlign="left">
                <Box fontSize={12} color="grey" mb={'8px'}>
                  Est. Value
                </Box>
                <HStack align="center">
                  <Ethereum />
                  <Box fontWeight={600} fontSize={14}>
                    {item.collection.floorAskPrice}
                  </Box>
                </HStack>
              </Box>
              <Spacer />
            </Flex>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
