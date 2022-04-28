import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const TransferIcon = (props: BoxProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 2C14.7761 2 15 2.22386 15 2.5C15 4.433 16.567 6 18.5 6C18.7761 6 19 6.22386 19 6.5C19 6.77614 18.7761 7 18.5 7C16.567 7 15 8.567 15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 9.08637 14.6518 7.82498 15.6713 7H2.5C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6L15.6713 6C14.6518 5.17502 14 3.91363 14 2.5C14 2.22386 14.2239 2 14.5 2Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 19C6.22386 19 6 18.7761 6 18.5C6 16.568 4.43458 15.0016 2.50292 15L2.50051 15C2.50034 15 2.50017 15 2.5 15C2.24112 15 2.02819 14.8032 2.00258 14.5511C2.00098 14.5354 2.00011 14.5194 2.00001 14.5032C2 14.5022 2 14.5011 2 14.5C2 14.2239 2.22386 14 2.5 14C4.433 14 6 12.433 6 10.5C6 10.2239 6.22386 10 6.5 10C6.77614 10 7 10.2239 7 10.5C7 11.9136 6.34817 13.175 5.32867 14L18.5 14C18.7761 14 19 14.2239 19 14.5C19 14.7761 18.7761 15 18.5 15L5.32867 15C6.34817 15.825 7 17.0864 7 18.5C7 18.7761 6.77614 19 6.5 19Z"
          fill="black"
        />
      </Icon>
    </Box>
  );
};
