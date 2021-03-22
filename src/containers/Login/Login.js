import "./Login.css";
import { Formik } from "formik";
import LoginForm from "../../components/LoginForm.js";
import * as Yup from 'yup';

const emailValid = [ 'frontend@itci.com' ];

const passwordValid = [ 'frontend1234' ];

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email invalido')
    .max(255)
    .oneOf(emailValid, 'Email invalido')
    .lowercase()
    .required('Por favor, ingrese email'),
  password: Yup.string()
    .min(8, 'Contraseña demasiado corta')
    .max(255)
    .oneOf(passwordValid, 'Contraseña invalida')
    .required('Por favor, ingrese contraseña'),
})

const Login = () => {
  return (
    <div className="container d-flex p-2 bd-highlight">
      <h1 className="header">Login</h1>
      <Formik 
        initialValues = {{
          email: '',
          password: '',
          }}
        onSubmit={( values, actions)=>{
          console.log(values)
          actions.setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={SignupSchema}
        >
        {props => <LoginForm {...props}/>}
      </Formik>
    </div>
  );
};

export default Login;
