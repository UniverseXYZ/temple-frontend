import React, { FC } from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const UserIcon: FC<BoxProps> = (props) => {
  //
  return (
    <Box {...props}>
      <Icon
        width="100%"
        height="100%"
        viewBox="0 0 20 21"
        fill="none"
        display="block"
      >
        <circle cx="10" cy="7.5" r="3" stroke="black" />
        <path
          d="M16 18.5C16 15.1863 13.3137 12.5 10 12.5C6.68629 12.5 4 15.1863 4 18.5"
          stroke="black"
          strokeLinecap="round"
        />
      </Icon>
    </Box>
  );
};
