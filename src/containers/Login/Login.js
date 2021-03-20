import "./Login.css";
import { Formik } from "formik";
import LoginForm from "../../components/LoginForm.js";

const validation = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Por favor, ingrese email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email invalido';
  }

  if (!values.password) {
    errors.password = 'Por favor, ingrese contraseña';
  }

  return errors;
};

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
          console.log(actions)
          actions.setSubmitting(false);
        }}
        validate={validation}>
        {props => <LoginForm {...props}/>}
      </Formik>
    </div>
  );
};

export default Login;
