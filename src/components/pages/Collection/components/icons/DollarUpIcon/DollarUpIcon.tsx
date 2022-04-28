import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const DollarUpIcon = (props: BoxProps) => {
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
        <path
          d="M14.5 10.3571V10.3571C14.5 8.77919 13.2208 7.5 11.6429 7.5H9C7.61929 7.5 6.5 8.61929 6.5 10V10C6.5 11.3807 7.61929 12.5 9 12.5H12C13.3807 12.5 14.5 13.6193 14.5 15V15C14.5 16.3807 13.3807 17.5 12 17.5H9.35714C7.77919 17.5 6.5 16.2208 6.5 14.6429V14.6429"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10.5 5.5L10.5 19.5" stroke="black" strokeLinecap="round" />
        <path
          d="M2.5 5.5L10.5 1.5L18.5 5.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </Box>
  );
};
