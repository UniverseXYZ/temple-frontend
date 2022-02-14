import React, { FC } from 'react';
import {
  Heading,
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

import {
  SettingsItem,
  ISettingsItem,
} from './components/SettingsItem/SettingsItem';

import { useSettings } from '@/hooks';
import { useLocalStorage } from '@rehooks/local-storage';

// import cn from 'classnames';
// import styles from './SettingsModal.module.sass';
import { items } from './items';

export const SettingsModal: FC = () => {
  //
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  //const [items] = useLocalStorage('settings', initialItems);

  const isDark = colorMode === 'dark';

  return (
    <>
      <IconButton icon={<SettingsIcon />} onClick={onOpen} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        autoFocus={false}
        size="md"
        //isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Heading as="h6" variant="h6" mb="20px">
              Custimize widgets
            </Heading>
            {items.map((item: ISettingsItem, index: number) => (
              <SettingsItem
                key={index}
                id={item.id}
                visible={item.visible}
                image={item.image}
                title={item.title}
                description={item.description}
                //onChange={}
              />
            ))}
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
