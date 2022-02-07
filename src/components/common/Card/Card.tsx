import React, { FC } from 'react';
import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';

interface Props extends BoxProps {
  variant?: string;
  children?: React.ReactNode;
}

export const Card: FC<Props> = (props) => {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig('Card', { variant });

  return (
    <Box sx={styles} {...rest}>
      {children}
    </Box>
  );
};
