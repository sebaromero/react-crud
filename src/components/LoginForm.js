import { Field, Form } from "formik";
import "../styles/LoginForm.css";
import React from 'react';

const LoginForm = ({ handleSubmit, errors, validation } ) => {

    return (
        <div className="container d-flex p-2 bd-highlight">
            <Form onSubmit={handleSubmit}className="form mb-3">
                <div className="email">
                    <label htmlFor="email" className="form-label mt-3">Email</label>
                    <Field className="form-control" 
                    id="email"
                    name="email"
                    validate={validation}
                    type="email"
                    placeholder="Email" />
                    { errors.email && <p className="error">{errors.email}</p> }
                </div>
                <div className="password">
                    <label className="form-label mt-3" htmlFor="password">Password</label>
                    <Field className="form-control"
                    id="password" 
                    type="password"
                    name="password"
                    validate={validation}
                    placeholder="Password" />
                    { errors.password && <p className="error">{errors.password}</p> }
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-info" type="submit">Log In</button>
                </div>
            </Form>                   
        </div>
    )
}

export default LoginForm
