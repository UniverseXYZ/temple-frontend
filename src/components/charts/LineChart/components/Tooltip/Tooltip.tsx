import React from 'react';
import { Box, HStack } from '@chakra-ui/react';

import { Ethereum } from '@/components/icons';

import cn from 'classnames';
import styles from './Tooltip.module.sass';
import moment from 'moment';

export const Tooltip = (props: any) => {
  //
  const { payload } = props;

  return (
    <Box className={styles.Wrapper}>
      <HStack spacing="8px" mb="10px">
        <Ethereum w="15px" h="24px" />
        <Box className={styles.Price}>{payload[0]?.value.toFixed(2)}</Box>
      </HStack>
      <HStack spacing="10px">
        <Box className={styles.Date}>{moment(payload[0]?.payload.timestamp).format("MM/DD/YYYY")}</Box>
      </HStack>
    </Box>
  );
};
