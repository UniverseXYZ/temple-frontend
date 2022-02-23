import React, { FC } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';

import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { ethers } from 'ethers';

import { useWallets } from '@/hooks';

import { Content, Footer } from './components';

interface Props {
  isOpen: boolean;
  onClose(): void;
}

const validationSchema = yup.object({
  Name: yup.string().required().max(20),
  Address: yup
    .string()
    .default('')
    .required()
    .test(
      'is-eth-address',
      'The address you have entered is not valid',
      (value) => ethers.utils.isAddress(value)
    ),
});

const initialValues = { Name: '', Address: '', Image: '' };

export const WalletsModal: FC<Props> = (props) => {
  //
  const { isOpen, onClose } = props;

  const { addWallet } = useWallets();

  const onFormSubmit = (values: any, actions: any) => {
    //

    //TODO: Change yup field name to uppercase
    addWallet({
      name: values.Name,
      address: values.Address,
      image: values.Image,
    }).then(
      (result: any) => {
        if (result.data) {
          actions.setSubmitting(false);
          actions.resetForm(initialValues);
          onClose();
        }
        console.log('result', result);
      },
      (error) => {
        actions.setFieldError(error.field, error.messege);
        actions.setSubmitting(false);
        console.log('error', error);
      }
    );
  };

  //
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onFormSubmit}
    >
      <Form>
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
            <ModalHeader>Add new wallet</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Content />
            </ModalBody>
            <ModalFooter>
              <Footer isOpen={isOpen} onClose={onClose} />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Form>
    </Formik>
  );
};
