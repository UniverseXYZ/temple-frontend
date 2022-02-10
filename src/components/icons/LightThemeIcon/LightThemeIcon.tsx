import React, { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const LightThemeIcon: FC<IconProps> = (props) => (
  <Icon fill="none" viewBox="0 0 18 18" {...props}>
    <path
      d="M8.78378 1V2.2973M8.78378 15.7027V17M17 9H15.7027M2.2973 9H1M14.6569 14.6569L13.7395 13.7395M4.26047 4.26047L3.34315 3.34315M3.34315 14.6569L4.26048 13.7395M13.7395 4.26048L14.6569 3.34316M13.3243 9C13.3243 11.3883 11.3883 13.3243 9 13.3243C6.61174 13.3243 4.67568 11.3883 4.67568 9C4.67568 6.61174 6.61174 4.67568 9 4.67568C11.3883 4.67568 13.3243 6.61174 13.3243 9Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
