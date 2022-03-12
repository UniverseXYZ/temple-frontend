import React, { FC, useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useWallets } from '@/hooks';

import { WalletsModalContext } from '../../context/WalletsModalContext';

import { WalletsModal } from '../WalletsModal';
import { WalletsDropdown } from '../WalletsDropdown';

export const WalletsButton: FC = (props) => {
  //
  const { onOpen } = useContext(WalletsModalContext);

  const { wallets } = useWallets();

  const isEmpty = wallets.length === 0;

  return (
    <>
      {isEmpty ? (
        <Button onClick={() => onOpen()} w="175px">
          Create portfolio
        </Button>
      ) : (
        <WalletsDropdown />
      )}

      <WalletsModal />
    </>
  );
};
