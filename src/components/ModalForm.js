import React from "react";
import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";

import { ValidationForm } from "./ValidationForm";

export const ModalForm = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Add User</button>
      <Modal id="1" isOpen={isModalOpen} transition={ModalTransition.BOTTOM_UP}>
        <ValidationForm />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};
