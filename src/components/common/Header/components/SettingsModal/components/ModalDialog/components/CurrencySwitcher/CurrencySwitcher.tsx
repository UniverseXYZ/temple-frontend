import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { CurrencyToggle } from '@/components/common';
import { useCurrency } from '@/hooks';

import cn from 'classnames';
import styles from './CurrencySwitcher.module.sass';

interface Props {
  onChange?: (value: any) => void;
}

export const CurrencySwitcher = (props: Props) => {
  //
  const { onChange } = props;

  const { selectedCurrency } = useCurrency();

  const onCurrencyChange = (value: any) => {
    onChange && onChange(value);
  };
  //
  return (
    <Box className={styles.Wrapper}>
      <Flex align="center">
        <Box className={styles.Text}>Base currency</Box>
        <Spacer />
        <CurrencyToggle
          onChange={onCurrencyChange}
          initialValue={selectedCurrency}
        />
      </Flex>
    </Box>
  );
};
