import "./Login.css";
import { Formik } from "formik";
import LoginForm from "../../components/LoginForm.js";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const validation = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Please, enter your email adress';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email adress'
    }
    if (!values.password) {
      errors.password = 'Please, enter your password';
    } else if (values.password.length < 8) {
      errors.password = 'Password is too short';
    }

    return errors;
  };

  let history = useHistory();
  const users = {
    email: "frontenditci@gmail.com",
    password: "frontend1234",
  };

  return (
    <div className="container d-flex p-2 bd-highlight">
      <h1 className="header">Login</h1>
      <Formik 
        initialValues = {{
          email: '',
          password: '',
          }}
        onSubmit={(values, actions)=>{
          if ( values.email == users.email, values.password == users.password){
          setTimeout(() => {
            console.log(values)
            actions.setSubmitting(false);
            history.push("/home");
          }, 2000);}
          else if ( values.email !== users.email, values.password !== users.password){
            setTimeout(()=> {
              actions.setSubmitting(true)
              alert ('Wrong username and/or password')
            }, 2000);}
        }}
        validate={validation}
      >
        {(props) => <LoginForm {...props} />}
      </Formik>
    </div>
  );
};
