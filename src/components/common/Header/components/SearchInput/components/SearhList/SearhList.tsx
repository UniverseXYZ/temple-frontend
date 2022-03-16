import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { ListItem } from '../ListItem';

import cn from 'classnames';
import styles from './SearchList.module.sass';

export const SearhList: FC<any> = (props: any) => {
  //
  const { collections } = props;
  return (
    <Box className={styles.DropdownWrapper}>
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
