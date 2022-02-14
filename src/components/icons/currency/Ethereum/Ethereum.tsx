import React, { FC } from 'react';
import { IconProps, Icon, useColorMode } from '@chakra-ui/react';
import { LightPath } from './LightPath';
import { DarkPath } from './DarkPath';

export const Ethereum: FC<IconProps> = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Icon
      width="10px"
      height="16px"
      viewBox="0 0 12 20"
      fill="none"
      display="block"
      {...props}
    >
      {colorMode === 'light' ? <LightPath /> : <DarkPath />}
    </Icon>
  );
};
