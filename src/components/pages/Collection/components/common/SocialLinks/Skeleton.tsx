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
      width={180}
      height={20}
      viewBox="0 0 180 20"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <circle cx="10" cy="10" r="10" />
      <circle cx="42" cy="10" r="10" />
      <circle cx="74" cy="10" r="10" />
      <circle cx="106" cy="10" r="10" />
      <circle cx="138" cy="10" r="10" />
      <circle cx="170" cy="10" r="10" />
    </ContentLoader>
  );
};
