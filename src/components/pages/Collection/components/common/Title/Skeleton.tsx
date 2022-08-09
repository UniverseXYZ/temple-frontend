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
      width={172}
      height={67}
      viewBox="0 0 172 67"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <rect y="39" width="137" height="28" rx="14" />
      <rect width="172" height="28" rx="14" />
    </ContentLoader>
  );
};
