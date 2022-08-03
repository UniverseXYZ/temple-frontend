import React from 'react';
import { LinkBox, Box, Flex, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


import { Avatar } from '@/components/common';

import cn from 'classnames';
import styles from './ListItem.module.sass';

export const ListItem = (props: any) => {
  //
  const { collection } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <LinkBox className={cn(styles.Item, isDark && styles.Dark)}>
      <Link to={`/collections/${collection.contract}`}>
        <Flex>
          <Avatar
            className={styles.Avatar}
            image={collection.image}
            name={collection.name}
            boxSize="40px"
            showBorder={false}
          />
          <Box flexGrow={1}>
            <Box className={styles.Name}>{collection.name}</Box>
            <Box className={styles.Desc}>{collection.contract}</Box>
          </Box>
        </Flex>
      </Link>
    </LinkBox>
  );
};
