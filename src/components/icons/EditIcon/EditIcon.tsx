import React, { FC } from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const EditIcon: FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <Icon width="18px" height="18px" viewBox="0 0 18 18" fill="none">
        <path
          d="M2.18519 12.8519L14.037 1L17 3.96296L5.14815 15.8148M2.18519 12.8519L1 17L5.14815 15.8148M2.18519 12.8519L5.14815 15.8148M11.6667 3.37037L14.6296 6.33333"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </Box>
  );
};