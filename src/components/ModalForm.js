import React from "react";
import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import AddButton from './AddButton'

import { ValidationForm } from "./ValidationForm";

export const ModalForm = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className=' mx-auto'>
      <AddButton onClick={openModal} text="Add user" />
      <Modal id="1" isOpen={isModalOpen} transition={ModalTransition.BOTTOM_UP}>
        <button onClick={closeModal} className='btn btn-outline-danger'>Close</button>
        <ValidationForm/>
      </Modal>
    </div>
  );
};
