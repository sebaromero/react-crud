import "./Login.css";
import { Formik } from "formik";
import LoginForm from "../../components/LoginForm.js";
// import { useState , useEffect } from "react";

const validation = values => {
  let errors = {}

  if (!values.email) {
    errors.email = 'Por favor, ingrese email';
  }

  if (!values.password) {
    errors.password = 'Por favor, ingrese contraseña';
  }
};

const Login = () => {
  return (
    <div className="container">
      <h1 className="header">Login</h1>
      <Formik 
        initialValues = {{
          email: '',
          password: ''}}
        onSubmit={( values, actions )=>{
          console.log(values)
          console.log(actions)
          actions.setSubmitting(false);
        }}
        validate={validation}>
        <LoginForm/>
      </Formik>
    </div>
  );
};

export default Login;
