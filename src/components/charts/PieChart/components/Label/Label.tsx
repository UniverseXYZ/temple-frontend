import React, { useEffect, useState } from 'react';
import { Box, HStack, VStack, useColorMode } from '@chakra-ui/react';
import { PriceTicker } from '@/components/common';
import { Ethereum } from '@/components/icons';

import cn from 'classnames';
import styles from './Label.module.sass';
import { useNetworth } from '@/hooks/useNetworth';
import { useCurrency, useWallets } from '@/hooks';

export const Label = (props: any) => {
  //
  const { value } = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const { getNetworth } = useNetworth();
  const { activeWallet } = useWallets();
  const [networth, setNetworth] = useState("");
  const [networthETH, setNetworthETH] = useState("");
  const { selectedCurrency, rates } = useCurrency();

  useEffect(() => {
    async function get(){
      const res = await getNetworth(activeWallet.address)
      if(res){
        setNetworth(Number(res[Object.keys(res)[0]]).toFixed(2))
      }
    }

    if(activeWallet && activeWallet.address){
      get()
    }
  }, [activeWallet])

  useEffect(() => {
    if(networth && rates){
      console.log(networth, rates)
      setNetworthETH((Number(networth) / Number(rates.ethereum.usd)).toFixed(2));
    }
  }, [networth, rates])

  return (
    <g>
      <foreignObject
        x={props.viewBox.cx - 50}
        y={props.viewBox.cy - 50}
        width={100}
        height={100}
      >
        <Box className={cn(styles.Wrapper, isDark && styles.Dark)}>
          <VStack spacing="10px">
            <PriceTicker value={10.23} vector="down" />
            <HStack spacing="6px">
              <Ethereum w="14px" h="20px" />
              <Box className={styles.Balance}>{networthETH}</Box>
            </HStack>
            <Box className={styles.Amount}>${networth}</Box>
          </VStack>
        </Box>
      </foreignObject>
    </g>
  );
};
