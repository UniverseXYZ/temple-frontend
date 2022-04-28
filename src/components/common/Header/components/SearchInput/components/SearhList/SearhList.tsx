import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { Loading } from '@/components/common';

import { ListItem } from '../ListItem';

import cn from 'classnames';
import styles from './SearchList.module.sass';

export const SearhList = (props: any) => {
  //
  const { collections, isOpen } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      className={cn(
        styles.DropdownWrapper,
        isDark && styles.Dark,
        isOpen && styles.isOpen
      )}
    >
      {/* <Loading /> */}

      <Box className={styles.CollectionsListWrapper}>
        <Box className={styles.CollectionsList__Headline}>Collections</Box>

        <Box className={styles.CollectionsList}>
          {collections.map((collection: any, index: number) => (
            <ListItem key={index} collection={collection} />
          ))}
        </Box>

        <Box className={styles.CollectionsList__Footer}>
          Press Enter to search all items
        </Box>
      </Box>
    </Box>
  );
};
