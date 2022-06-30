import {
  IconButton as ChakraIconButton,
  IconButtonProps,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';

interface Props extends IconButtonProps {
  variant?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    //
    const { variant, ...rest } = props;

    const styles = useStyleConfig('Tooltip', { variant });

    return <ChakraIconButton ref={ref} sx={styles} {...rest} />;
  }
);
