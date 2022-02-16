import React from 'react';
import { Box, Icon, useColorMode } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './Handle.module.sass';

export const Handle = (props: any) => {
  const { isDragging, ...restProps } = props;
  const { colorMode } = useColorMode();

  return (
    <Box
      className={cn(
        styles.Icon,
        colorMode === 'dark' && styles.Dark,
        isDragging && styles.Dragging
      )}
      {...restProps}
    >
      <Icon width="4px" height="16px" viewBox="0 0 4 16" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6C3.10457 6 4 6.89543 4 8ZM2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 0 12.8954 0 14C0 15.1046 0.895431 16 2 16Z"
          fill="black"
        />
      </Icon>
    </Box>
  );
};
