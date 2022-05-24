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
      width={1048}
      height={437}
      viewBox="0 0 1048 437"
      backgroundColor={!isDark ? '#E6E6E6' : '#454545'}
      foregroundColor={!isDark ? '#f3f3f3' : '#525252'}
    >
      <rect width="228" height="42" rx="12" />
      <rect y="127" width="1048" height="310" rx="12" />
      <rect x="858" width="190" height="42" rx="12" />
    </ContentLoader>
  );
};
