import React, { FC } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';

import { WalletsModal } from '../WalletsModal';

export const WalletsButton: FC = (props) => {
  //
  const {} = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  //
  return (
    <>
      <Button onClick={onOpen}>Create portfolio</Button>
      <WalletsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
