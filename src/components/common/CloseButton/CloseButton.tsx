import React from 'react';
import { Box, Icon, useColorMode } from '@chakra-ui/react';

interface Props {
  className?: string;
  onClick?(): void;
}

export const CloseButton = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref: any) => {
    //
    const { onClick, ...restProps } = props;

    const { colorMode } = useColorMode();

    const isLight = colorMode === 'light';

    const styles = {
      bg: isLight ? 'white' : 'dark.40',
      boxSize: '26px',
      boxShadow: isLight ? '0px 5px 20px rgba(136, 120, 172, 0.2)' : 'none',
      borderRadius: 'full',
      textAlign: 'center',
    };

    return (
      <Box as="button" sx={styles} {...restProps} onClick={onClick} ref={ref}>
        <Icon width="12px" height="12px" viewBox="0 0 24 24" fill="none">
          <path
            fill="currentColor"
            d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
          />
        </Icon>
      </Box>
    );
  }
);
