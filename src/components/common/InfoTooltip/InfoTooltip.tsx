import React, { FC } from 'react';
import { TooltipProps } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui';
import { InfoIcon } from '@/components/icons';

import styles from './InfoTooltip.module.sass';

type Props = Omit<TooltipProps, 'children'>;

export const InfoTooltip: FC<Props> = (props) => {
  //
  //const { label } = props;
  return (
    <Tooltip openDelay={100} placement="top" {...props}>
      <InfoIcon className={styles.InfoTooltip} cursor="pointer" />
    </Tooltip>
  );
};
