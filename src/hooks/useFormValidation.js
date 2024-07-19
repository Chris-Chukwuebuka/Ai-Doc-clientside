import { useEffect, useState } from "react";

const useFormValidation = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formError, setFormError] = useState("");

  const checkIfFormIsValid = () => {
    console.log("Checking form validity...");
    const errors = [];

    if (!firstName.trim()) {
      console.log("First name is required...");
      errors.push("First name is required");
    }

    if (!lastName.trim()) {
      console.log("Last name is required...");
      errors.push("Last name is required");
    }

    if (!email.trim()) {
      console.log("Email is required...");
      errors.push("Email is required");
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)) {
      console.log("Invalid email address...");
      errors.push("Invalid email address");
    }

    if (!password.trim()) {
      console.log("Password is required...");
      errors.push("Password is required");
    } else if (password.length < 8) {
      console.log("Password must be at least 8 characters...");
      errors.push("Password must be at least 8 characters");
    } else if (!/[A-Z]/.test(password)) {
      console.log("Password must contain at least one uppercase letter...");
      errors.push("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      console.log("Password must contain at least one lowercase letter...");
      errors.push("Password must contain at least one lowercase letter");
    } else if (!/[0-9]/.test(password)) {
      console.log("Password must contain at least one number...");
      errors.push("Password must contain at least one number");
    }

    if (!confirmPassword.trim()) {  
      console.log("Confirm password is required...");
      errors.push("Confirm password is required");
    }

    if (confirmPassword !== password) {
      console.log("Passwords do not match...");
      errors.push("Passwords do not match");
    }

    setFormError(errors.join(", "));
    setFormIsValid(errors.length === 0);
  };

  useEffect(() => {
    checkIfFormIsValid();
  }, [firstName, lastName, email, password, confirmPassword]);

  return { formIsValid, formError };
};

export default useFormValidation;
