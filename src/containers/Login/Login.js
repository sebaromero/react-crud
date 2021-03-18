import "./Login.css";
import { Formik, Field, Form } from "formik";
import { useState , useEffect } from "react";

const Login = () => {
  return (
    <div className="container">
      <h1 className="header">Login</h1>
      <Formik 
      initialValues = {{
        email: '',
        password: ''
      }}>
        <Form className="form">
            <div className="email">
              <label htmlFor="email">Email</label>
              <Field className="email" id="email" type="email" name="email" placeholder="Write down your email adress" required/>
            </div>
            <div className="password">
              <label className="label" htmlFor="password">Password</label>
              <Field className="password" id="password" type="password" name="password" placeholder="Write down your password" required/>
            </div>
            <button className="submit" type="submit" onSubmit={()=>{}}>Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
