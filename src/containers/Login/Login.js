import "./Login.css";
import { Formik } from "formik";
import LoginForm from "../../components/LoginForm.js";
import { useHistory } from 'react-router-dom';

const validation = values => {
  let errors = {};

  if (!values.email) {
    errors.email = 'Por favor, ingrese email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Correo invalido'
  }
  if (!values.password) {
    errors.password = 'Por favor, ingrese contraseña';
  } else if (values.password.length < 8) {
    errors.password = 'Contraseña demasiado corta';
  }

  return errors;
}

const Login = () => {
    let history = useHistory();

  return (
    <div className="container d-flex p-2 bd-highlight">
      <h1 className="header">Login</h1>
      <Formik 
        initialValues = {{
          email: '',
          password: '',
          }}
        onSubmit={(values, actions)=>{
          setTimeout(() => {
            console.log(values)
            actions.setSubmitting(false);
            history.push("/home");
          }, 2000);
        }}
        validate={validation}   
      >
        {props => <LoginForm {...props}/>}
      </Formik>
    </div>
  );
};

export default Login;
