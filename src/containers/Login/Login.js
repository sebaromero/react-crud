import "./Login.css";
import { Formik, Field, Form } from "formik";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik 
      initialValues = {{
        email: '',
        password: ''
      }}>
        <Form className="form">
            <label className="form__label" htmlFor="email">email</label>
            <Field className="email" id="email" type="email" name="email" placeholder="Write down your email adress" required/>
            <label className="label" htmlFor="password">Password</label>
            <Field className="password" id="password" type="password" name="password" placeholder="Write down your password" required/>
          <button type="submit" onSubmit={()=>{}}>Log In</button>
          </Form>
      </Formik>
    </div>
  );
};

export default Login;
