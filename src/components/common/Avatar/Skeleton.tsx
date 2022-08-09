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
      width={70}
      height={70}
      viewBox="0 0 70 70"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <rect width="70" height="70" rx="35" />
    </ContentLoader>
  );
};
