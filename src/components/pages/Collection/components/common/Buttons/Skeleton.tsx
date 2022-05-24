import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => {
  //
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  //
  return (
    <ContentLoader
      speed={2}
      width={150}
      height={42}
      viewBox="0 0 150 42"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <rect width="87.23" height="42" rx="12" />
      <rect x="107.23" width="42" height="42" rx="12" />
    </ContentLoader>
  );
};
