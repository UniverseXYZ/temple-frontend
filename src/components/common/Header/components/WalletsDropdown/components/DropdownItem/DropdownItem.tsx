import React, { SyntheticEvent, useContext } from 'react';
import { Box, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import { CopyableText, CurrencyExchanger } from '@/components/common';
import { Tooltip } from '@/components/ui';

import { WalletsModalContext } from '../../../../context/WalletsModalContext';

import { Ethereum, EditIcon } from '@/components/icons';
import { WalletAvatar } from '../WalletAvatar';

import { truncateEthAddress } from '@/utils';

import cn from 'classnames';
import styles from './DropdownItem.module.sass';

interface IWallet {
  id: string;
  name: string;
  address: string;
  balance: number;
  image: string;
}

interface Props {
  wallet: IWallet;
  onSelect(wallet: IWallet): void;
  value: string;
}

export const DropdownItem = (props: Props) => {
  //
  const { wallet, value, onSelect } = props;

  const { onEdit }: any = useContext(WalletsModalContext);

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const handleSelect = () => {
    onSelect(wallet);
  };

  const handleEditWallet = (e: SyntheticEvent) => {
    e.stopPropagation();
    onEdit(wallet);
  };

  return (
    <Box
      className={cn(styles.Item, isDark && styles.Dark)}
      onClick={() => handleSelect()}
    >
      <Flex align="center">
        <Box className={styles.Avatar}>
          <WalletAvatar name={wallet.name} image={wallet.image} />
        </Box>

        <Box className={styles.Content}>
          <Text className={styles.Name} isTruncated maxWidth={'160px'}>
            {wallet.name}
          </Text>
          <Box className={styles.Address}>
            <CopyableText value={wallet.address}>
              {truncateEthAddress(wallet.address, 9)}
            </CopyableText>
          </Box>
        </Box>

        <Box className={styles.Balance}>
          <Box className={styles.BalanceAmount}>
            {value &&
              <CurrencyExchanger value={Number(value)} maxAbbreviate={1e3} />
            }
          </Box>

          <Box className={styles.BalanceText}>on balance</Box>
        </Box>

        <Box className={styles.Action}>
          <Tooltip label="Edit">
            <Box
              className={styles.ActionIcon}
              onClick={(e) => handleEditWallet(e)}
            >
              <EditIcon boxSize="16px" />
            </Box>
          </Tooltip>
        </Box>
      </Flex>
    </Box>
  );
};
