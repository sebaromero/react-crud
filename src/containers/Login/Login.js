import "./Login.css";
import { Formik } from "formik";
import LoginForm from "../../components/LoginForm.js";
import * as Yup from 'yup';

const validation = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Por favor, ingrese email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email invalido';
  }

  if (!values.password) {
    errors.password = 'Por favor, ingrese contraseña';
  } else if (values.password.length < 8) {
    errors.password = "Contraseña incorrecta";
  }

  return errors;
};

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup.string()
    .max(255)
    .required('password is required'),
})

const Login = () => {
  return (
    <div className="container">
      <h1 className="header">Login</h1>
      <Formik 
        initialValues = {{
          email: '',
          password: '',
          }}
        onSubmit={( values, actions )=>{
          console.log(values)
          actions.setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }}
        validate={validation}
        validationSchema={SignupSchema}
        >
        {props => <LoginForm {...props}/>}
      </Formik>
    </div>
  );
};

export default Login;
