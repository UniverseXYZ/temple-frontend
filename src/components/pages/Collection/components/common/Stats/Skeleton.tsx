import React from 'react';
import { Box, Icon } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './Stats.module.sass';

export const Skeleton = () => {
  //
  return (
    <Box className={styles.Wrapper}>
      {[...Array(6)].map((_, index) => (
        <Box key={index} className={styles.Item}>
          <ItemSkeleton />
        </Box>
      ))}
    </Box>
  );
};

const ItemSkeleton = () => (
  <Icon width="121" height="57" viewBox="0 0 121 57" fill="none">
    <rect x="0.5" y="0.5" width="120" height="20" rx="10" fill="#E6E6E6" />
    <rect x="14.5" y="28.5" width="92" height="28" rx="14" fill="#E6E6E6" />
  </Icon>
);
