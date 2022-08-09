import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const MediumIcon = (props: BoxProps) => {
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
          d="M3.1348 5.856C3.14583 5.74948 3.13106 5.64193 3.09168 5.54196C3.05229 5.44198 2.98939 5.35236 2.908 5.28025L1.2268 3.29663V3H6.445L10.4788 11.6669L14.0248 3H19V3.29663L17.5627 4.645C17.5018 4.69072 17.4548 4.75166 17.4267 4.82131C17.3987 4.89097 17.3906 4.96673 17.4034 5.0405V14.9578C17.3906 15.0315 17.3987 15.1073 17.4267 15.1769C17.4548 15.2466 17.5018 15.3075 17.5627 15.3533L18.9667 16.7025V17H11.9071V16.7034L13.3615 15.3209C13.5046 15.1809 13.5046 15.1397 13.5046 14.9262V6.9095L9.4618 16.9667H8.9164L4.2094 6.9095V13.6505C4.1707 13.9331 4.267 14.2192 4.4704 14.424L6.3613 16.671V16.9667H1V16.671L2.89 14.424C2.99 14.3225 3.06422 14.1998 3.10672 14.0655C3.14923 13.9312 3.15884 13.7891 3.1348 13.6505V5.856Z"
          fill="black"
        />
      </Icon>
    </Box>
  );
};
