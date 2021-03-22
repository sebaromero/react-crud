export const validate = (values) => {
  const errors = {};
  if (!values.completeName) {
    errors.completeName = "Required";
  } else if (values.completeName.length > 30) {
    errors.completeName = "Too long! Must be a valid name";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Wrong email addres";
  }

  if (!values.username) {
    errors.username = "Required";
  } else if (
    !/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i.test(
      values.username
    )
  ) {
    errors.username = "Put a valid username";
  }

  return errors;
};
