import { useFormik } from "formik";

export const ValidationForm = () => {
  const formik = useFormik({
    initialValues: {
      completeName: "",

      email: "",

      username: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="completeName">Complete Name</label>

      <input
        id="completeName"
        name="completeName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.completeName}
      />

      <label htmlFor="email">Email</label>

      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="username">Email Address</label>

      <input
        id="username"
        name="username"
        type="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />

      <button type="submit">Add User</button>
    </form>
  );
};
