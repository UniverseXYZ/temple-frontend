import React from 'react';
import {
  IconButton as ChakraIconButton,
  IconButtonProps,
  useStyleConfig,
} from '@chakra-ui/react';

interface Props extends IconButtonProps {
  variant?: string;
}

export const IconButton = (props: Props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Tooltip', { variant });

  return <ChakraIconButton sx={styles} {...rest} />;
};
