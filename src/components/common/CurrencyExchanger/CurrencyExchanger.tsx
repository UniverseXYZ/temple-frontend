import React, { useState, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Ethereum } from '@/components/icons';
import { numberWithCommas, abbreviateNumber } from '@/utils';

import { useCurrency } from '@/hooks';

interface Props {
  blockchain?: string;
  value: number;
  maxAbbreviate?: number;
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
  const { blockchain = 'ethereum', value, maxAbbreviate = 1e6 } = props;

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

    if (valueInCurrency >= maxAbbreviate) {
      return abbreviateNumber(valueInCurrency);
    }

    return formatedValue;
  };

  return (
    <HStack
      display="inline-flex"
      spacing={CURRENCIES_SYMBOLS[selectedCurrency].spacing}
    >
      <Box>{CURRENCIES_SYMBOLS[selectedCurrency].symbol}</Box>
      <Box>{val}</Box>
    </HStack>
  );
};
