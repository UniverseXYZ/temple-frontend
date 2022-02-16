import React, { FC, useState } from 'react';
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
  HStack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';

import { IconButton } from '@/components/common';
import { SettingsIcon } from '@/components/icons';
import { Tooltip } from '@/components/ui';

import {
  SettingsItem,
  ISettingsItem,
} from './components/SettingsItem/SettingsItem';

import { useSettings } from '@/hooks';
import { items } from './items';

export const SettingsModal: FC = () => {
  //
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { sections: defaultSectionsValue, setSections: setSettingSections } =
    useSettings();
  const [sections, setSections] = useState(defaultSectionsValue);

  const onSectionVisibleChange = (id: string, visible: boolean): void => {
    const sectionArray = sections;
    const index = sectionArray.findIndex((section: any) => section.id === id);
    sectionArray[index].visible = visible;
    setSections(sectionArray);
  };

  const handleSaveChanges = () => {
    onClose();
    setSettingSections(sections);
  };

  const isDark = colorMode === 'dark';

  return (
    <>
      <Tooltip label="Settings" placement="bottom">
        <IconButton icon={<SettingsIcon />} onClick={onOpen} />
      </Tooltip>

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
                image={item.image}
                title={item.title}
                description={item.description}
                onChange={onSectionVisibleChange}
              />
            ))}
          </ModalBody>

          <ModalFooter>
            <HStack spacing={'12px'}>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={() => handleSaveChanges()}>Save changes</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
