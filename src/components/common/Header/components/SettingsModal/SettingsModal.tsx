import React from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { IconButton } from '@/components/common';
import { SettingsIcon } from '@/components/icons';
import { Tooltip } from '@/components/ui';

import { ModalDialog } from './components/ModalDialog/ModalDialog';

export const SettingsModal = () => {
  //
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip label="Settings" placement="bottom">
        <IconButton icon={<SettingsIcon />} onClick={onOpen} />
      </Tooltip>

      <ModalDialog isOpen={isOpen} onClose={onClose} />
    </>
  );
};
