import React, { FC, useContext, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';

import { WalletsModalContext } from '../../context/WalletsModalContext';

import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { ethers } from 'ethers';

import { useWallets } from '@/hooks';

import { Content, Footer } from './components';

const validationSchema = yup.object({
  name: yup.string().required().max(20),
  address: yup
    .string()
    .default('')
    .required()
    .test(
      'is-eth-address',
      'The address you have entered is not valid',
      (value) => ethers.utils.isAddress(value)
    ),
});

const initialValues = { name: '', address: '', image: '' };

export const WalletsModal: FC = () => {
  //
  const { wallet, type, visible, onClose } = useContext(WalletsModalContext);

  const { addWallet, updateWallet } = useWallets();

  const isCreate = type === 'create';
  const isUpdate = type === 'update';

  const onFormSubmit = (values: any, actions: any) => {
    //
    if (isCreate) {
      handleAddWallet(values, actions);
    }

    if (isUpdate) {
      handleUpdateWallet(values, actions);
    }
  };

  const handleAddWallet = (values: any, actions: any) => {
    addWallet(values).then(
      (result: any) => {
        if (result.data) {
          actions.setSubmitting(false);
          actions.resetForm(initialValues);
          onClose();
        }
      },
      (error) => {
        actions.setFieldError(error.field, error.messege);
        actions.setSubmitting(false);
      }
    );
  };

  const handleUpdateWallet = (values: any, actions: any) => {
    updateWallet(values).then(
      (result: any) => {
        if (result.data) {
          actions.setSubmitting(false);
          actions.resetForm(initialValues);
          onClose();
        }
      },
      (error) => {
        actions.setFieldError(error.field, error.messege);
        actions.setSubmitting(false);
      }
    );
  };

  //
  return (
    <Formik
      initialValues={wallet || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={onFormSubmit}
    >
      <Form>
        <Modal
          isOpen={visible}
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
              <Footer isOpen={visible} onClose={onClose} type={type} />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Form>
    </Formik>
  );
};
