import React from 'react';
import { TooltipProps, useColorMode } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui';
import { InfoIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './InfoTooltip.module.sass';

type InfoTooltipProps = Omit<TooltipProps, 'children'>;

export const InfoTooltip = (props: InfoTooltipProps) => {
  //
  const { placement = 'top', ...rest } = props;
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <Tooltip openDelay={100} placement={placement} {...rest}>
      <InfoIcon
        className={cn(styles.InfoTooltip, isDark && styles.Dark)}
        cursor="pointer"
      />
    </Tooltip>
  );
};
