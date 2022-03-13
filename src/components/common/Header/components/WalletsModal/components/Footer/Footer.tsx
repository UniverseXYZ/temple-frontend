import React, { FC } from 'react';
import { HStack, Spacer, Button, useDisclosure } from '@chakra-ui/react';

import { useFormikContext } from 'formik';

import { IconButton } from '@/components/common';
import { TrashIcon } from '@/components/icons';

import { ConfirmDialog } from '@/components/ui';

export const Footer: FC<any> = (props: any) => {
  //
  const { type, onClose, onDelete } = props;

  const {
    isOpen: isOpenDialog,
    onOpen: onOpenDialog,
    onClose: onCloseDialog,
  } = useDisclosure();

  const { submitForm, resetForm, isSubmitting } = useFormikContext();

  React.useEffect(() => {
    resetForm();
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  const isCreate = type === 'create';
  const isUpdate = type === 'update';

  return (
    <>
      {isUpdate && (
        <IconButton
          icon={<TrashIcon boxSize="20px" />}
          onClick={() => onOpenDialog()}
        />
      )}

      <Spacer />

      <HStack spacing={'10px'}>
        <Button variant="ghost" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          onClick={() => submitForm()}
        >
          {isCreate ? 'Add wallet' : 'Save changes'}
        </Button>
      </HStack>

      <ConfirmDialog
        visible={isOpenDialog}
        onCancel={onCloseDialog}
        onConfirm={onDelete}
        confirmText="Yes, confirm"
        cancelText="Cancel"
      />
    </>
  );
};
