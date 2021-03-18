import "./Login.css";
import { Formik, Field, Form } from "formik";
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
      <h1>Login</h1>
      <Formik 
        initialValues = {{
          email: '',
          password: ''
      }}>
        <Form className="form"
              onSubmit={( values, actions )=>{
                console.log(values)
                console.log(actions)
                actions.setSubmitting(false);
              }}
              validate={validation}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <Field className="email" 
                   id="email" 
                   type="email" 
                   name="email" 
                   placeholder="Ingrese email" 
                   required/>
          </div>
          <div className="password">
            <label className="label" 
                   htmlFor="password">Contraseña</label>
            <Field className="password" 
                   id="password" 
                   type="password" 
                   name="password" 
                   placeholder="Ingrese contraseña" 
                   required/>
            </div>
            <button className="submit" 
                    type="submit">Ingresar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
