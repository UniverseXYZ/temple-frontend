import React from 'react';
import { Box, BoxProps, Icon } from '@chakra-ui/react';

export const InfoIcon = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    //
    return (
      <Box className="InfoIcon" ref={ref} boxSize={'16px'} {...props}>
        <Icon
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          fill="none"
          display="block"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4ZM8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM7.2 7.2V12H8.8V7.2H7.2ZM7.2 4H8.8V5.6H7.2V4Z"
            fill="black"
            fillOpacity="0.8"
          />
        </Icon>
      </Box>
    );
  }
);
