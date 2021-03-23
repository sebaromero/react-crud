import React, {useState, useEffect} from "react";
import { ModalProvider } from "react-simple-hook-modal";
import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import { useFormik } from "formik";
import axios from "axios";
import 'react-simple-hook-modal/dist/styles.css'
import "../styles/Spinner.css";

// Componentes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { AddButton } from "../components/AddButton";
import Table from "./Table";
import { fetchData } from "../api/users";
import { validate } from "../hooks/validate";

const Body = () => {
  const [state, setState] = useState({
    loading: false,
    users: [],
    error: null,
  });

  const { loading, users, error } = state;

  const doFetchUsers = async () => {
    setState({ loading: true, users: [], error: null });

    try {
      setTimeout(async () => {
        const { data } = await fetchData();
        setState({ loading: false, users: data, error: null });
      }, 1500);
    } catch (e) {
      setState({ loading: false, users: [], error: e.message });
    }
  };

  useEffect(() => {
    doFetchUsers();
  }, []);

  const { isModalOpen, openModal, closeModal } = useModal();

  const formik = useFormik({
    initialValues: {
      completeName: '',

      email: '',

      username: '',
    },
    validate,
    onSubmit: async (formData) => {
      let newUser = await axios.post('https://jsonplaceholder.typicode.com/users', formData)
      setState({users: [...users, newUser.data]})
      console.log(newUser.data)
  }
  })



  if (loading) {
    return (
      <div className="spinner-container">
        <FontAwesomeIcon
          size="6x"
          icon={faSpinner}
          className="spinner"
        ></FontAwesomeIcon>
      </div>
    );
  } else if (error) {
    <div className="spinner-container">
      <h1 className="error">{error}</h1>;
    </div>;
  }

  return (
    <> 
      <Table users={users} />
      <AddButton onClick={openModal} text="Add user" />
      <div>
      <ModalProvider>
      <Modal id="1" isOpen={isModalOpen} transition={ModalTransition.BOTTOM_UP}>
        <div class="modal-header">
          <h5 class="modal-title">Add new user</h5>
          <button onClick={closeModal} className="btn btn-outline-danger">
            Close
          </button>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="completeName" className="form-label">
              Name
            </label>
            <input
              id="completeName"
              name="completeName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.completeName}
              className="form-control"
            />
            {formik.errors.completeName ? (
              <div className="errors">{formik.errors.completeName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="form-control"
            />
            {formik.errors.email ? (
              <div className="errors">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="form-control"
            />
            {formik.errors.username ? (
              <div className="errors">{formik.errors.username}</div>
            ) : null}
          </div>

          <div class="modal-footer">
            <button type="submit" className="btn btn-success col-12">
              Add User
            </button>
          </div>
        </form>
        </Modal>
      </ModalProvider>
      </div>
    </>
  )
};

export default Body;