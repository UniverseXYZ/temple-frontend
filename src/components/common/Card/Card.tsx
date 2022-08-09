import React from 'react';
import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';

import cn from 'classnames';

type Omitted = 'border' | 'shadow';
interface Props extends Omit<BoxProps, Omitted> {
  variant?: string;
  border?: boolean;
  hover?: boolean;
  shadow?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Card = (props: Props) => {
  const {
    variant,
    children,
    border = true,
    hover,
    shadow,
    className,
    ...rest
  } = props;

  const styles = useStyleConfig('Card', { variant });

  return (
    <Box
      className={cn(
        className,
        border && 'Card--withBorder',
        hover && 'Card--withHover',
        shadow && 'Card--withShadow'
      )}
      sx={styles}
      {...rest}
    >
      {children}
    </Box>
  );
};
