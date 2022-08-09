import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useWallets } from '@/hooks';

import { WalletsModalContext } from '../../context/WalletsModalContext';

import { WalletsModal } from '../WalletsModal';
import { WalletsDropdown } from '../WalletsDropdown';

export const WalletsButton = () => {
  //
  const { onOpen } = useContext(WalletsModalContext);

  const { wallets } = useWallets();

  const isEmpty = wallets.length === 0;

  return (
    <>
      {isEmpty ? (
        <Button onClick={() => onOpen()}>Create portfolio</Button>
      ) : (
        <WalletsDropdown />
      )}

      <WalletsModal />
    </>
  );
};
