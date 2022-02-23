import React, { FC } from 'react';
import { TooltipProps } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui';
import { InfoIcon } from '@/components/icons';

type Props = Omit<TooltipProps, 'children'>;

export const InfoTooltip: FC<Props> = (props) => {
  //
  //const { label } = props;
  return (
    <Tooltip {...props} openDelay={100}>
      <InfoIcon cursor="pointer" />
    </Tooltip>
  );
};
