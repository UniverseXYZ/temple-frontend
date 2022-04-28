import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const DollarDownIcon = (props: BoxProps) => {
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
          d="M14 6.35714V6.35714C14 4.77919 12.7208 3.5 11.1429 3.5H8.5C7.11929 3.5 6 4.61929 6 6V6C6 7.38071 7.11929 8.5 8.5 8.5H11.5C12.8807 8.5 14 9.61929 14 11V11C14 12.3807 12.8807 13.5 11.5 13.5H8.85714C7.27919 13.5 6 12.2208 6 10.6429V10.6429"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 1.5L10 15.5" stroke="black" strokeLinecap="round" />
        <path
          d="M18 15.5L10 19.5L2 15.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </Box>
  );
};
