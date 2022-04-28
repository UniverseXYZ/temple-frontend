import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const CrossIcon = (props: BoxProps) => {
  return (
    <Box boxSize="18px" {...props}>
      <Icon
        width="100%"
        height="100%"
        viewBox="0 0 14 14"
        fill="none"
        display="block"
      >
        <path d="M1.00049 1L13 12.9995" stroke="black" />
        <path d="M1 13.0002L12.9995 1.00075" stroke="black" />
      </Icon>
    </Box>
  );
};
