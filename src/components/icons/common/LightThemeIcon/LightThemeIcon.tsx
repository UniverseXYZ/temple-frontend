import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const LightThemeIcon = (props: IconProps) => (
  <Icon fill="none" width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <circle cx="10" cy="10" r="5" stroke="#000" />
    <path
      stroke="#000"
      strokeLinecap="round"
      d="M10 2.5977V1m5.2341 3.7657 1.1297-1.1297M10 19v-1.6016m-6.364-1.0345 1.1326-1.1325M2.5993 10H1m14.2329 5.2331 1.1309 1.1309M19 10h-1.5977M3.636 3.636l1.1296 1.1297"
    />
  </Icon>
);
