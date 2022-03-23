import React, { FC } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import { PriceTicker } from '@/components/common';
import { Ethereum } from '@/components/icons';

import cn from 'classnames';
import styles from './Label.module.sass';

export const Label: FC = (props: any) => {
  //
  const { value } = props;

  return (
    <g>
      <foreignObject
        x={props.viewBox.cx - 50}
        y={props.viewBox.cy - 50}
        width={100}
        height={100}
      >
        <Box className={styles.Wrapper}>
          <VStack spacing="10px">
            <PriceTicker value={10.23} vector="down" />
            <HStack spacing="6px">
              <Ethereum w="14px" h="20px" />
              <Box className={styles.Balance}>23.454</Box>
            </HStack>
            <Box className={styles.Amount}>$100,242</Box>
          </VStack>
        </Box>
      </foreignObject>
    </g>
  );
};
