import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './Tooltip.module.sass';

export const Tooltip: FC = (props: any) => {
  //
  const { payload } = props;

  const fill = payload[0]?.payload.fill;

  console.log('payload', payload);

  return (
    <Box className={styles.Wrapper}>
      <Box className={styles.Border} style={{ backgroundColor: fill }} />
      <Box className={styles.Content}>
        <div>{payload[0]?.name}</div>
        <div>{payload[0]?.value}</div>
      </Box>
    </Box>
  );
};
