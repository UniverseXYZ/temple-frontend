import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';

import cn from 'classnames';
import styles from './IconButton.module.sass';

interface IconButtonProps extends BoxProps {
  icon: React.ReactNode;
  onClick?(): void;
}

export const IconButton = React.forwardRef<HTMLDivElement, IconButtonProps>(
  (props, ref) => {
    //
    const { icon, onClick, className, ...rest } = props;

    const { colorMode } = useColorMode();

    const isDark = colorMode === 'dark';

    return (
      <Box
        ref={ref}
        as="button"
        className={cn(styles.Button, isDark && styles.Dark, className)}
        onClick={onClick}
        {...rest}
      >
        {icon}
      </Box>
    );
  }
);
