import React from "react";
import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import AddButton from './AddButton'
import { useFormik } from "formik";

const ModalFormulario = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const formik = useFormik({
    initialValues: {
      completeName: "",

      email: "",

      username: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
  <>
    <AddButton onClick={openModal} text="Add user"/>
      <Modal id="1" isOpen={isModalOpen} transition={ModalTransition.BOTTOM_UP}>
        <div class="modal-header">
         <h5 class="modal-title">Add new user</h5>
         <button onClick={closeModal} className='btn btn-outline-danger'>Close</button>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className='form-group'>
          <label htmlFor="completeName" className='form-label'>Complete Name</label>
          <input
          id="completeName"
          name="completeName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.completeName}
          className='form-control'
          />
          </div>

          <div className='form-group'>
          <label htmlFor="email" className='form-label'>Email</label>
          <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          className='form-control'
          />
          </div>

          <div className='form-group'>
          <label htmlFor="username" className='form-label'>Username</label>
          <input
          id="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          className='form-control'
          />
          </div>

          <div class="modal-footer"> 
            <button type="submit" className='btn btn-success col-12'>Add User</button>
          </div>
        </form>

      </Modal>
    </>
  );
};

export default ModalFormulario