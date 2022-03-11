import React, { FC } from 'react';
import {
  Tooltip as ChakraTooltip,
  TooltipProps,
  useStyleConfig,
} from '@chakra-ui/react';

interface Props extends TooltipProps {
  variant?: string;
}

export const Tooltip: FC<Props> = (props) => {
  const { variant, children, hasArrow = true, gutter = 10, ...rest } = props;

  const styles = useStyleConfig('Tooltip', { variant });

  return (
    <ChakraTooltip
      sx={styles}
      hasArrow={hasArrow}
      gutter={gutter}
      closeOnClick={false}
      {...rest}
    >
      {children}
    </ChakraTooltip>
  );
};
