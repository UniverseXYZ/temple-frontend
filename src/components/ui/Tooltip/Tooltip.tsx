import React from 'react';
import {
  Tooltip as ChakraTooltip,
  TooltipProps,
  useStyleConfig,
} from '@chakra-ui/react';

interface Props extends TooltipProps {
  variant?: string;
}

export const Tooltip = (props: Props) => {
  const {
    variant,
    children,
    placement = 'top',
    hasArrow = true,
    gutter = 10,
    ...rest
  } = props;

  const styles = useStyleConfig('Tooltip', { variant });

  return (
    <ChakraTooltip
      sx={styles}
      hasArrow={hasArrow}
      gutter={gutter}
      closeOnClick={false}
      placement={placement}
      openDelay={200}
      {...rest}
    >
      {children}
    </ChakraTooltip>
  );
};
