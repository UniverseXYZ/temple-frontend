import React, { FC, SyntheticEvent, useContext } from 'react';
import { Box, Flex, HStack, Text, useClipboard } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui';

import { WalletsModalContext } from '../../../../context/WalletsModalContext';

import { Ethereum, EditIcon } from '@/components/icons';
import { WalletAvatar } from '../WalletAvatar';

import { truncateEthAddress } from '@/utils';

import styles from './DropdownItem.module.sass';

interface IWallet {
  id: string;
  name: string;
  address: string;
  image: string;
}

interface Props {
  wallet: IWallet;
  onSelect(wallet: IWallet): void;
}

export const DropdownItem: FC<Props> = (props) => {
  //
  const { wallet, onSelect } = props;

  console.log(wallet);

  const { onEdit } = useContext(WalletsModalContext);
  const { hasCopied, onCopy } = useClipboard(wallet.address);

  const handleSelect = () => {
    onSelect(wallet);
  };

  const handleCopy = (e: SyntheticEvent) => {
    e.stopPropagation();
    onCopy();
  };

  const handleEditWallet = (e: SyntheticEvent) => {
    e.stopPropagation();
    onEdit(wallet);
  };

  const address = truncateEthAddress(wallet.address, 9);

  return (
    <Box className={styles.Item} onClick={() => handleSelect()}>
      <Flex align="center">
        <Box className={styles.Avatar}>
          <WalletAvatar name={wallet.name} image={wallet.image} />
        </Box>

        <Box className={styles.Content}>
          <Text className={styles.Name} isTruncated maxWidth={'160px'}>
            {wallet.name}
          </Text>
          <Tooltip label={hasCopied ? 'Copied!' : 'Copy'} placement="top">
            <Box className={styles.Address} onClick={(e) => handleCopy(e)}>
              {address}
            </Box>
          </Tooltip>
        </Box>

        <Box className={styles.Balance}>
          <HStack justify="end">
            <Box>
              <Ethereum />
            </Box>
            <Box className={styles.BalanceAmount}>0,24</Box>
          </HStack>
          <Box className={styles.BalanceText}>on balance</Box>
        </Box>

        <Box className={styles.Action}>
          <Tooltip label="Edit" placement="top">
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
