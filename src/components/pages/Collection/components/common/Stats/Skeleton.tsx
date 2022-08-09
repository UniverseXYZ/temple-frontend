import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import ContentLoader from 'react-content-loader';

import cn from 'classnames';
import styles from './Stats.module.sass';

export const Skeleton = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  //
  return (
    <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
      {[...Array(6)].map((_, index) => (
        <Box key={index} className={styles.Item}>
          <ItemSkeleton isDark={isDark} />
        </Box>
      ))}
    </Box>
  );
};

const ItemSkeleton = ({ isDark }: any) => (
  <ContentLoader
    speed={2}
    width={121}
    height={68}
    viewBox="0 0 121 68"
    backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
    foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    //opacity={0.5}
  >
    <rect x="0.5" y="0" width="120" height="28" rx="14" />
    <rect x="14.5" y="40" width="92" height="28" rx="14" />
  </ContentLoader>
);
