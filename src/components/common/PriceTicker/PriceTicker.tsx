import React, { FC } from 'react';
import { Box, BoxProps, Icon, HStack } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './PriceTicker.module.sass';

interface Props extends BoxProps {
  value: string | number;
  vector: 'up' | 'down';
}

export const PriceTicker: FC<Props> = (props) => {
  //
  const { value, vector, className, ...rest } = props;

  const isUp = vector === 'up';
  const isDown = vector === 'down';

  return (
    <Box
      className={cn(
        className,
        styles.Wrapper,
        isUp && styles.isUp,
        isDown && styles.isDown
      )}
      {...rest}
    >
      <HStack spacing={0}>
        <Arrow />
        <Box>{`${value} %`}</Box>
      </HStack>
    </Box>
  );
};

const Arrow = () => (
  <Box className={styles.Arrow}>
    <Icon width="100%" height="100%" viewBox="0 0 9 7" fill="none">
      <path
        d="M5.31798 6.58858C4.99892 7.03525 4.33507 7.03525 4.01601 6.58858L0.570575 1.76504C0.192359 1.23555 0.570858 0.500049 1.22156 0.500049L8.11243 0.500049C8.76313 0.50005 9.14163 1.23555 8.76341 1.76505L5.31798 6.58858Z"
        fill="black"
      />
    </Icon>
  </Box>
);
