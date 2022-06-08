import React, { useState } from 'react';
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
} from '@chakra-ui/react';

import { InfoTooltip } from '@/components/common';

import { arrayMove as reorderItems } from '@dnd-kit/sortable';

import { useSettings, useCurrency } from '@/hooks';

import { Content, CurrencySwitcher } from './components';

export const ModalDialog = (props: any) => {
  //
  const { isOpen, onClose } = props;

  const { sections: defaultSectionsValue, setSections: setSettingSections } =
    useSettings();

  const {
    selectedCurrency: defaultSelectedCurrency,
    setCurrency: setSettingsCurrency,
  } = useCurrency();

  const [sections, setSections] = useState(defaultSectionsValue);
  const [currency, setCurrency] = useState(defaultSelectedCurrency);

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

  const onCurrencyChange = (value: any) => {
    setCurrency(value);
  };

  const handleSaveChanges = () => {
    onClose();
    setSettingSections(sections);
    setSettingsCurrency(currency);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      autoFocus={false}
      size="sm"
      returnFocusOnClose={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <HStack>
            <Heading
              as="h2"
              p="20px 0"
              fontSize="16px"
              fontFamily="Space Grotesk"
            >
              Customize widgets
            </Heading>
            <InfoTooltip label="You can pick-and-choose what interests you, hide content from your feed, and rearange the widget positions by dragging & dropping them." />
          </HStack>

          <Content
            onSectionVisibleChange={onSectionVisibleChange}
            onSectionSortableChange={onSectionSortableChange}
          />
          <CurrencySwitcher onChange={onCurrencyChange} />
        </ModalBody>

        <ModalFooter>
          <HStack spacing={'12px'}>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => handleSaveChanges()}>Save changes</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
