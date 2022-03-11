import React, { FC, useContext, useRef, useState, useEffect } from 'react';
import { Box, Button, Text, HStack, useColorMode } from '@chakra-ui/react';

import { useClickAway } from 'react-use';

import { WalletsModalContext } from '../../context/WalletsModalContext';

import { useWallets } from '@/hooks';
import { DropdownItem, WalletAvatar, AllWalletsItem } from './components';
import { SelectDownArrow } from '@/components/icons';

import cn from 'classnames';
import styles from './WalletsDropdown.module.sass';

const ALL_WALLETS_VALUE = {
  id: 'all',
  name: 'All wallets',
  image: '',
};

export const WalletsDropdown: FC = (props) => {
  //
  //const { } = props;

  const { wallets, activeWallet, setActiveWallet } = useWallets() as any;
  const { onOpen } = useContext(WalletsModalContext);

  const [value, setValue] = useState(activeWallet);
  const [visible, setVisible] = useState(false);

  const refSelect = useRef(null);

  useClickAway(refSelect, () => {
    setVisible(false);
  });

  // useEffect(() => {
  //   if (wallets.length === 1) {
  //     setValue(wallets[0]);
  //   }
  // }, []);

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
      <Box className={cn(styles.SelectedItem)} onClick={() => toggleVisible()}>
        <HStack>
          <WalletAvatar size={'28px'} name={value?.name} image={value?.image} />
          <Text isTruncated maxWidth={'125px'}>
            {value?.name}
          </Text>
        </HStack>
      </Box>

      <Box className={cn(styles.Dropdown)}>
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

          <Button mt={5} onClick={() => handleOpenModal()}>
            Add new wallet
          </Button>
        </Box>
      </Box>

      <Box className={styles.Arrow}>
        <SelectDownArrow />
      </Box>
    </Box>
  );
};
