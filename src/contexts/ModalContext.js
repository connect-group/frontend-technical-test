import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [showModal, setModal] = useState(false);
  const [showDetails, setDetails] = useState('');

  return (
    <ModalContext.Provider
      value={{
        showModal, setModal, showDetails, setDetails
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
