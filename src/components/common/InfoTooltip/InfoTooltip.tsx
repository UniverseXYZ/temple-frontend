import React, { FC } from 'react';
import { TooltipProps, useColorMode } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui';
import { InfoIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './InfoTooltip.module.sass';

type Props = Omit<TooltipProps, 'children'>;

export const InfoTooltip: FC<Props> = (props) => {
  //
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <Tooltip openDelay={100} placement="top" {...props}>
      <InfoIcon
        className={cn(styles.InfoTooltip, isDark && styles.Dark)}
        cursor="pointer"
      />
    </Tooltip>
  );
};
