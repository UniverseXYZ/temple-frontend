import React from 'react';
import { Box, Image, useColorMode } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './Banner.module.sass';

interface Props {
  image: string;
  title: string;
  isLoading?: boolean;
}

export const Banner = (props: Props) => {
  //
  const { image, title, isLoading } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  //
  return (
    <Box
      className={cn(
        styles.Banner,
        isDark && styles.Dark,
        isLoading && styles.isLoading
      )}
    >
      <Image src={image} alt={title} ignoreFallback />
    </Box>
  );
};
