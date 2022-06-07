import React, { useState, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Ethereum } from '@/components/icons';
import { numberWithCommas, abbreviateNumber } from '@/utils';

import cn from 'classnames';
import styles from './.module.sass';

import { useCurrency } from '@/hooks';

interface Props {
  blockchain?: string;
  value: number;
}

const CURRENCIES = {
  USD: 'USD',
  ETH: 'ETH',
};

const CURRENCIES_SYMBOLS = {
  [CURRENCIES.USD]: {
    symbol: '$',
    spacing: '3px',
  },
  [CURRENCIES.ETH]: {
    symbol: <Ethereum />,
    spacing: '6px',
  },
};

export const CurrencyExchanger = (props: Props) => {
  //
  const { blockchain = 'ethereum', value } = props;

  const [val, setVal] = useState<number | string>(value);

  const { selectedCurrency, rates } = useCurrency();

  useEffect(() => {
    if (selectedCurrency === CURRENCIES.USD) {
      const exchangedValue = calculate(value);
      setVal(exchangedValue);
    } else {
      setVal(value);
    }
  }, [selectedCurrency]);

  //TODO: Fix eslint deps issue

  const calculate = (value: number, currency = 'usd'): string => {
    //
    const valueInCurrency = value * rates[blockchain][currency];
    const formatedValue = numberWithCommas(valueInCurrency);

    if (valueInCurrency >= 1e6) {
      return abbreviateNumber(valueInCurrency);
    }

    return formatedValue;
  };

  return (
    <HStack spacing={CURRENCIES_SYMBOLS[selectedCurrency].spacing}>
      <Box>{CURRENCIES_SYMBOLS[selectedCurrency].symbol}</Box>
      <Box>{val}</Box>
    </HStack>
  );
};
