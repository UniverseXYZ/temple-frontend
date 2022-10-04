import React, { useContext, useRef, useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Text,
  HStack,
  Flex,
  useColorMode,
} from '@chakra-ui/react';

import { useClickAway } from 'react-use';

import { WalletsModalContext } from '../../context/WalletsModalContext';

import { IWallet, useWallets } from '@/hooks';
import { DropdownItem, WalletAvatar, AllWalletsItem } from './components';
import { CurrencyExchanger } from '@/components/common';
import { SelectDownArrow } from '@/components/icons';

import cn from 'classnames';
import styles from './WalletsDropdown.module.sass';
import { useEtherscan } from '@/hooks/useEtherscan';

const ALL_WALLETS_VALUE = {
  id: 'all',
  name: 'All wallets',
  image: '',
};

export const WalletsDropdown = () => {
  //
  const { wallets, activeWallet, setActiveWallet } = useWallets();
  const { onOpen }: any = useContext(WalletsModalContext);
  const { getAddressBalance } = useEtherscan();

  const [value, setValue] = useState(activeWallet);
  const [visible, setVisible] = useState(false);

  const refSelect = useRef(null);

  useClickAway(refSelect, () => {
    setVisible(false);
  });

  useEffect(() => {
    setValue(activeWallet);
    const fetchBalances = async () => {
      const newWallets = wallets;
      newWallets.forEach(async (wallet: IWallet) => {
        wallet.balance = await getAddressBalance(wallet.address);
      });
    };
    
    if (activeWallet.balance === undefined) {
      fetchBalances();
    }
  }, [activeWallet, wallets, value, getAddressBalance]);

  const toggleVisible = () => {
    setVisible((visible) => !visible);
  };

  const handleOpenModal = () => {
    //
    onOpen();
    setVisible(false);
  };

  const handleSelectWallet = (wallet: any) => {
    setValue(wallet);
    setActiveWallet(wallet);
    setVisible(false);
  };

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      ref={refSelect}
      className={cn(
        styles.Wrapper,
        visible && styles.isOpen,
        isDark && styles.Dark
      )}
    >
      <Box className={styles.SelectedItem} onClick={() => toggleVisible()}>
        <HStack spacing="8px">
          <WalletAvatar size={'28px'} name={value?.name} image={value?.image} />
          <Text as="div" className={styles.Text} isTruncated>
            {value?.name}
          </Text>
          <Box className={styles.Balance}>
            {wallets.map((wallet: IWallet) => {
              if (wallet.isActive) {
                return (<>
                  {wallet.balance ? <CurrencyExchanger value={wallet.balance} key={wallet.address} maxAbbreviate={1e3} />
                    :
                    <CurrencyExchanger value={0} key={wallet.address} maxAbbreviate={1e3} />
                  }
                </>
                )}
            })}
          </Box>
        </HStack>
      </Box>

      <Box className={styles.Dropdown}>
        <Box className={styles.DropdownList}>
          <Box className={styles.DropdownOverflow}>
            {/* {wallets.length > 1 && <AllWalletsItem />} */}

            {wallets.map((wallet: any, index: number) => (
              <DropdownItem
                wallet={wallet}
                value={wallet.balance}
                key={index}
                onSelect={handleSelectWallet}
              />
            ))}
          </Box>

          <Box m="20px">
            <Button w="100%" onClick={() => handleOpenModal()}>
              Add new wallet
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={styles.Arrow}>
        <SelectDownArrow />
      </Box>
    </Box>
  );
};
