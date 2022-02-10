import React, { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const DarkThemeIcon: FC<IconProps> = (props) => (
  <Icon fill="none" viewBox="0 0 18 18" {...props}>
    <path
      d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C11.0823 1 5.8 5.58018 9.53333 9C13.2667 12.4198 17 6.66406 17 9Z"
      stroke="black"
    />
  </Icon>
);
