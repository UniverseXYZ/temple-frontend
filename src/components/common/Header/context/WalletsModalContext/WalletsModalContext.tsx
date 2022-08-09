import React, { useState, createContext } from 'react';

const MODAL_TYPE = {
  CREATE: 'create',
  UPDATE: 'update',
};

const defaultValue = {
  visible: false,
  type: MODAL_TYPE.CREATE,
  selected: null,
};

export const WalletsModalContext: any = createContext(defaultValue);

export const WalletsModalProvider = ({ children }: any) => {
  //
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(MODAL_TYPE.CREATE);
  const [selected, setSelected] = useState(null);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleUpdate = (wallet: any) => {
    setType(MODAL_TYPE.UPDATE);
    setSelected(wallet);
    setVisible(true);
  };

  const handleClose = () => {
    setType(MODAL_TYPE.CREATE);
    setSelected(null);
    setVisible(false);
  };

  const defaultContextValue = {
    wallet: selected,
    visible,
    type,
    onOpen: handleOpen,
    onEdit: handleUpdate,
    onClose: handleClose,
  };

  return (
    <WalletsModalContext.Provider value={defaultContextValue}>
      {children}
    </WalletsModalContext.Provider>
  );
};
