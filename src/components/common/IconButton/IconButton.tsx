import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';

import cn from 'classnames';
import styles from './IconButton.module.sass';

interface Props {
  icon: React.ReactNode;
  onClick?(): void;
}

export const IconButton: FC<Props> = (props) => {
  //
  const { icon, onClick } = props;

  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <Box
      as="button"
      className={cn(styles.Button, isDark && styles.Dark)}
      onClick={onClick}
    >
      {icon}
    </Box>
  );
};
