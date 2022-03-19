import React, { FC } from 'react';
import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';

import cn from 'classnames';

interface Props extends BoxProps {
  variant?: string;
  bordered?: boolean;
  hovered?: boolean;
  children?: React.ReactNode;
}

export const Card: FC<Props> = (props) => {
  const { variant, children, bordered, hovered, className, ...rest } = props;

  const styles = useStyleConfig('Card', { variant });

  return (
    <Box
      className={cn(
        className,
        bordered && 'Card--isBordered',
        hovered && 'Card--isHovered'
      )}
      sx={styles}
      {...rest}
    >
      {children}
    </Box>
  );
};
