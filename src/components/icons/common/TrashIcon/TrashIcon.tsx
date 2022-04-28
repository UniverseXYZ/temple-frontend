import React from 'react';
import { Box, Icon, BoxProps } from '@chakra-ui/react';

export const TrashIcon = (props: BoxProps) => (
  <Box {...props}>
    <Icon
      fill="none"
      viewBox="0 0 20 20"
      boxSize={props.boxSize}
      display="block"
    >
      <path d="M2 4.60022H18.2" stroke="black" strokeLinejoin="round" />
      <path
        d="M6.50005 4.6V2.8C6.50005 2.32261 6.68969 1.86477 7.02726 1.52721C7.36482 1.18964 7.82266 1 8.30005 1H11.9C12.3774 1 12.8353 1.18964 13.1728 1.52721C13.5104 1.86477 13.7 2.32261 13.7 2.8V4.6M16.4 4.6V17.2C16.4 17.6774 16.2104 18.1352 15.8728 18.4728C15.5353 18.8104 15.0774 19 14.6 19H5.60005C5.12266 19 4.66482 18.8104 4.32726 18.4728C3.98969 18.1352 3.80005 17.6774 3.80005 17.2V4.6H16.4Z"
        stroke="black"
        strokeLinejoin="round"
      />
      <path
        d="M8.30005 9.10022V14.5002"
        stroke="black"
        strokeLinejoin="round"
      />
      <path
        d="M11.9001 9.10022V14.5002"
        stroke="black"
        strokeLinejoin="round"
      />
    </Icon>
  </Box>
);
