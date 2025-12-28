export const validateContactForm = (values) => {
  const errors = {};

  // First Name
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Must be at least 2 characters";
  }

  // Last Name
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Must be at least 2 characters";
  }

  // Phone Number
  if (!values.phoneNum) {
    errors.phoneNum = "Required";
  } else if (!/^[0-9+\-() ]+$/.test(values.phoneNum)) {
    errors.phoneNum = "Invalid phone number";
  }

  // Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Feedback
  if (!values.feedback) {
    errors.feedback = "Feedback is required";
  }

  return errors;
};
