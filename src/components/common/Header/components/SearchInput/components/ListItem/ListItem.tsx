import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';

import { Avatar } from '@/components/common';

import cn from 'classnames';
import styles from './ListItem.module.sass';

export const ListItem = (props: any) => {
  //
  const { collection } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box className={cn(styles.Item, isDark && styles.Dark)}>
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
