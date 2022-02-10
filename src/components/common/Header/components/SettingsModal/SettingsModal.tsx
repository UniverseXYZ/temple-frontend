import React, { FC } from 'react';
import {
  Switch,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';

import { IconButton } from '@/components/common';
import { SettingsIcon } from '@/components/icons';

import cn from 'classnames';
import styles from './SettingsModal.module.sass';

export const SettingsModal: FC = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isDark = colorMode === 'dark';

  return (
    <>
      <IconButton icon={<SettingsIcon />} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Switch />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="outline">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
