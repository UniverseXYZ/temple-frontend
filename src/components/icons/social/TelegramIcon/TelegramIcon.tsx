import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const TelegramIcon = (props: BoxProps) => {
  //
  return (
    <Box {...props}>
      <Icon
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        display="block"
      >
        <path
          d="M18.4089 4.36523L15.6229 17.0946C15.4126 17.9928 14.8646 18.2164 14.0858 17.7935L9.84054 14.7627L7.79241 16.6716C7.56558 16.8914 7.37632 17.0748 6.93913 17.0748L7.24444 12.8864L15.1119 5.9988C15.4541 5.70364 15.0374 5.53945 14.5804 5.83525L4.85408 11.769L0.666821 10.4989C-0.243825 10.2236 -0.260311 9.61668 0.856731 9.19311L17.2345 3.07983C17.9928 2.80448 18.6562 3.24338 18.4089 4.36586V4.36523Z"
          fill="black"
        />
      </Icon>
    </Box>
  );
};
