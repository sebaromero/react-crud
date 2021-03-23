import "./Login.css";
import { Formik } from "formik";
import LoginForm from "../../components/LoginForm.js";
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

let history = useHistory();


const emailValid = [ 'frontend@itci.com' ];

const passwordValid = [ 'frontend1234' ];

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email invalido')
    .max(255)
    .oneOf(emailValid, 'Email invalido')
    .lowercase(emailValid)
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
        onSubmit={(values, actions)=>{
          console.log(values)
          actions.setSubmitting(false);
<<<<<<< HEAD
          history.push("/home");
=======
          
>>>>>>> b05a48fafc9c16e97a6ad8063faaaac8b217da8c
        }}
        validationSchema={SignupSchema}
        >
        {props => <LoginForm {...props}/>}
      </Formik>
    </div>
  );
};

export default Login;
