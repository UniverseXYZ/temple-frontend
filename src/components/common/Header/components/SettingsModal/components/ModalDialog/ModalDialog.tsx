import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
} from '@chakra-ui/react';

import { arrayMove as reorderItems } from '@dnd-kit/sortable';

import { useSettings } from '@/hooks';

import { Content } from './components';

export const ModalDialog = (props: any) => {
  //
  const { isOpen, onClose } = props;

  const { sections: defaultSectionsValue, setSections: setSettingSections } =
    useSettings();

  const [sections, setSections] = useState(defaultSectionsValue);

  const onSectionVisibleChange = (id: string, visible: boolean): void => {
    const sectionArray = [...sections];
    const index = sectionArray.findIndex((section: any) => section.id === id);
    sectionArray[index].visible = visible;
    setSections(sectionArray);
  };

  const onSectionSortableChange = (activeIndex: number, overIndex: number) => {
    if (activeIndex !== overIndex) {
      const sectionsArray = [...sections];
      const reorderedItems = reorderItems(
        sectionsArray,
        activeIndex,
        overIndex
      );
      reorderedItems.forEach((item: any, index) => (item.order = index + 1));
      setSections(reorderedItems);
    }
  };

  const handleSaveChanges = () => {
    onClose();
    setSettingSections(sections);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      autoFocus={false}
      size="md"
      returnFocusOnClose={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Content
            onSectionVisibleChange={onSectionVisibleChange}
            onSectionSortableChange={onSectionSortableChange}
          />
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
  );
};
