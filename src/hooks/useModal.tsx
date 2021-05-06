import React, {createContext, useContext, useState} from 'react';
import Modal from '../components/Modal';
type ModalContextProps = {
  modal: boolean;
  modalContent?: React.ReactNode;
  handleModal: (content: string) => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};
const ModalContext = createContext({} as ModalContextProps);

export const ModalContextProvider = ({children}: ModalProviderProps) => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleModal = (content = '') => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  const values = {
    modal,
    modalContent,
    // Functions
    handleModal,
  };

  return (
    <ModalContext.Provider value={values}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
