import React, { FC } from 'react';
import { HStack, Spacer, Button } from '@chakra-ui/react';

import { useFormikContext } from 'formik';

import { IconButton } from '@/components/common';
import { TrashIcon } from '@/components/icons';

export const Footer: FC<any> = (props: any) => {
  //
  const { onClose } = props;

  const { submitForm, resetForm, isSubmitting } = useFormikContext();

  React.useEffect(() => {
    resetForm();
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };
  //
  return (
    <>
      <IconButton icon={<TrashIcon boxSize="20px" />} />

      <Spacer />

      <HStack spacing={'10px'}>
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          onClick={() => submitForm()}
        >
          Add wallet
        </Button>
      </HStack>
    </>
  );
};
