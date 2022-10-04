import React, { useContext } from 'react';
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
import { error } from 'console';

const validationSchema = yup.object({
  name: yup.string().label('Name').required().max(30),
  address: yup
    .string()
    .label('Address')
    .default('')
    .required()
    .test(
      'is-eth-address',
      'The address you have entered is not valid',
      (value) => ethers.utils.isAddress(value)
    ),
});

const initialValues = { name: '', address: '', image: '' };

export const WalletsModal = () => {
  //
  const { wallet, type, visible, onClose }: any = useContext(WalletsModalContext);

  const { addWallet, updateWallet, removeWallet } = useWallets();

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


  const handleDeleteWallet = async () => {
    
    removeWallet(wallet.address);
    onClose();
  };

  //
  return (
    <Formik
      initialValues={wallet || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={onFormSubmit}
    >
      {() => (
        <Form style={{ marginInlineStart: 0 }}>
          <Modal
            isOpen={visible}
            onClose={onClose}
            blockScrollOnMount={false}
            autoFocus={false}
            size="md"
            returnFocusOnClose={false}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                {isCreate ? 'Add new wallet' : 'Edit wallet'}
              </ModalHeader>

              <ModalCloseButton />

              <ModalBody p="30px">
                <Content />
              </ModalBody>
              <ModalFooter>
                <Footer
                  isOpen={visible}
                  onClose={onClose}
                  onDelete={handleDeleteWallet}
                  type={type}
                />
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};
