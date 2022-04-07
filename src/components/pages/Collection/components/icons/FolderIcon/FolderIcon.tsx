import React, { FC } from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const FolderIcon: FC<BoxProps> = (props) => {
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
          d="M15 16.5H5C3.89543 16.5 3 15.6046 3 14.5V7.5V6.5C3 5.39543 3.89543 4.5 5 4.5H6.92963C7.59834 4.5 8.2228 4.8342 8.59373 5.3906L9.70313 7.0547C9.8886 7.3329 10.2008 7.5 10.5352 7.5H15C16.1046 7.5 17 8.39543 17 9.5V14.5C17 15.6046 16.1046 16.5 15 16.5Z"
          stroke="black"
        />
      </Icon>
    </Box>
  );
};
