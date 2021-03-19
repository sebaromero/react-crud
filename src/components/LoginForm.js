import { Field, Form } from "formik";
import "../styles/LoginForm.css";
import React from 'react';

const LoginForm = ({ handleSubmit, errors } ) => {
return (
     <div className="container">
          <Form onSubmit={handleSubmit}
                className="form mb-3">
               <div className="email">
                   <label htmlFor="email" className="form-label mt-3">Email</label>
                   <Field className="form-control" id="email" name="email" type="email" placeholder="Ingrese email" />
                   { errors.email && <p className="error">{errors.email}</p> }
               </div>
               <div className="password">
                   <label className="form-label mt-3" htmlFor="password">Contraseña</label>
                   <Field className="form-control" id="password" type="password" name="password" placeholder="Ingrese contraseña" />
                   { errors.password && <p className="error">{errors.password}</p> }
               </div>
               <div className="text-center mt-3">
                   <button className="btn btn-info" type="submit">Ingresar</button>
               </div>
          </Form>                   
     </div>
     )
}

export default LoginForm
