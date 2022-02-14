import React from 'react';
import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';

export interface RoundButtonProps extends BoxProps {
  variant?: string;
  icon?: React.ReactNode;
}

export const RoundButton = React.forwardRef<HTMLDivElement, RoundButtonProps>(
  (props, ref) => {
    //
    const { variant, icon, ...rest } = props;

    const styles = useStyleConfig('RoundButton', { variant });

    return (
      <Box as="button" sx={styles} {...rest} ref={ref}>
        {icon}
      </Box>
    );
  }
);
