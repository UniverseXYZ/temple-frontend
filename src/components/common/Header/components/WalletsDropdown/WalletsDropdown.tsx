import React, { useContext, useRef, useState, useEffect } from 'react';
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

import { useWallets } from '@/hooks';
import { DropdownItem, WalletAvatar, AllWalletsItem } from './components';
import { CurrencyExchanger } from '@/components/common';
import { SelectDownArrow } from '@/components/icons';

import cn from 'classnames';
import styles from './WalletsDropdown.module.sass';

const ALL_WALLETS_VALUE = {
  id: 'all',
  name: 'All wallets',
  image: '',
};

export const WalletsDropdown = () => {
  //
  const { wallets, activeWallet, setActiveWallet } = useWallets();
  const { onOpen } = useContext(WalletsModalContext);

  const [value, setValue] = useState(activeWallet);
  const [visible, setVisible] = useState(false);

  const refSelect = useRef(null);

  useClickAway(refSelect, () => {
    setVisible(false);
  });

  useEffect(() => {
    setValue(activeWallet);
  }, [activeWallet]);

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
            <CurrencyExchanger value={6.24} maxAbbreviate={1e3} />
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
