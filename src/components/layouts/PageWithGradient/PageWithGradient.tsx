import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './PageWithGradient.module.sass';

interface Props {
  children: React.ReactNode;
}

export const PageWithGradient = (props: Props) => {
  //
  const { children } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>{children}</Box>
  );
};
