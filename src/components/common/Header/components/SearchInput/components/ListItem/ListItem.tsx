import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Avatar } from '@/components/common';

import cn from 'classnames';
import styles from './ListItem.module.sass';

export const ListItem: FC<any> = (props: any) => {
  //
  const { collection } = props;

  return (
    <Box className={styles.Item}>
      <Flex>
        <Avatar
          className={styles.Avatar}
          image={collection.logo}
          name={collection.name}
          boxSize="40px"
          showBorder={false}
        />
        <Box flexGrow={1}>
          <Box className={styles.Name}>{collection.name}</Box>
          <Box className={styles.Desc}>4,242 items</Box>
        </Box>
      </Flex>
    </Box>
  );
};
