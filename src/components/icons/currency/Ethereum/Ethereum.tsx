import React, { FC } from 'react';
import { Box, BoxProps, Icon, useColorMode } from '@chakra-ui/react';
import { LightPath } from './LightPath';
import { DarkPath } from './DarkPath';

export const Ethereum: FC<BoxProps> = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Box w="10px" {...props}>
      <Icon
        width="100%"
        height="100%"
        viewBox="0 0 12 20"
        fill="none"
        display="block"
      >
        {colorMode === 'light' ? <LightPath /> : <DarkPath />}
      </Icon>
    </Box>
  );
};
