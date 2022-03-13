import React, { FC, useRef, useState } from 'react';
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  //useDisclosure,
} from '@chakra-ui/react';

export const ConfirmDialog: FC<any> = (props: any) => {
  //
  const {
    visible,
    onCancel,
    onConfirm,
    confirmText = 'Yes',
    cancelText = 'No',
  } = props;

  //const [visible, setVisible] = useState(false);

  const cancelRef = useRef(null);

  // const handleConfirm = () => {
  //   onConfirm
  // }

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onCancel}
      isOpen={visible}
      blockScrollOnMount={false}
      autoFocus={false}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Are you sure?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Are you sure you want to remove the wallet address?
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button colorScheme="red" mr={3} onClick={() => onConfirm()}>
            {confirmText}
          </Button>
          <Button variant="outline" ref={cancelRef} onClick={onCancel}>
            {cancelText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
