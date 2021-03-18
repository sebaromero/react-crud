import { Field, Form } from "formik";
import "./Formulario.css";
import React from 'react';

const Formulario = () => {
return (
     <div className="container">
          <Form className="form mb-3">
               <div className="email">
               <label htmlFor="email" className="form-label mt-3">Email</label>
               <Field className="form-control" 
               id="email" 
               name="email"
               type="email" 
               placeholder="Ingrese email" 
               />
               </div>
               <div className="password">
               <label className="form-label mt-3" 
               htmlFor="password">Contraseña</label>
               <Field className="form-control" 
               id="password" 
               type="password" 
               name="password" 
               placeholder="Ingrese contraseña" 
               />
               </div>
               <div className="text-center mt-3">
               <button className="btn btn-info " 
               type="submit">Ingresar</button>
               </div>
               </Form>                   
          </div>
     )
}

export default Formulario
