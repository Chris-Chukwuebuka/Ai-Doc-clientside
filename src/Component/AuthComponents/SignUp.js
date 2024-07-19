import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthImage from "../../Assets/Login Screen VECTOR 1.png";
import CloseButton from "react-bootstrap/CloseButton";
import Card from "react-bootstrap/Card";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./AuthStyles/Auth.css";
import useFormValidation from "../../hooks/useFormValidation";

const SignUp = () => {
  const redirect = useNavigate();

  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Added phoneNumber state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form validation hook
  const { formIsValid, formError } = useFormValidation(
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  );

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Handling form submission...");
    console.log("formIsValid:", formIsValid);

    if (!formIsValid) {
      console.log("Form is not valid. Cannot submit.");
      return;
    }

    // try {
    //   console.log("Sending registration request to the API...");

    //   // API request to register user
    //   const response = await fetch(`${process.env.REACT_APP_API_DEV_BASE_URL}/users`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ 
    //       firstName,
    //       lastName,
    //       email,
    //       phoneNumber, // Include phoneNumber in the request body
    //       password,
    //       confirmPassword,
    //     }),
    //   });

    //   console.log("API response received:", response);

    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }

    //   const data = await response.json();
    //   console.log("Registration successful:", data);

      // Redirect to login page after successful registration
      redirect("/login");

    // } catch (error) {
    //   console.error("Error registering:", error.message);
    //   console.error("Error details:", error);
    //   // Handle error, show message to user, etc.
    // }
  };

  console.log("formIsValid: ", formIsValid);
  console.log("formError: ", formError);

  return (
    <div className="container d-flex justify-content-center card-container mb-5">
      <Card
        className="border border-0"
        style={{
          width: "48rem",
          height: "40rem",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <div className="row close-holder col-12">
          <div className="fw-bold mb-5 btn-close">
            <CloseButton variant="black" />
          </div>
        </div>
        <div className="container mt-1">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold">Register an Account</h1>
              <p>We are glad to have you here! Please fill in your information.</p>
              {formError && (
                <div className="alert alert-danger mt-5" role="alert">
                  {typeof formError === "string" ? formError : JSON.stringify(formError)}
                </div>
              )}
              <form className="sign-up-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control fw-bold"
                    id="FirstName"
                    placeholder="First Name"
                    onChange={(event) => setFirstName(event.target.value)}
                    value={firstName}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control fw-bold"
                    id="LastName"
                    placeholder="Last Name"
                    onChange={(event) => setLastName(event.target.value)}
                    value={lastName}
                  />
                </div>
                <br />
                <div className="form-group border-0">
                  <input
                    type="email"
                    className="form-control fw-bold"
                    id="email"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control fw-bold"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    value={phoneNumber}
                  />
                </div>
                <br />
                <div className="form-group2 d-flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control fw-bold"
                    id="password"
                    placeholder="Create password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                  />
                  <button
                    type="button"
                    className="btn btn-transparent border-0 btnforView"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                <br />
                <div className="form-group2 d-flex">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control fw-bold"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                  />
                  <button
                    type="button"
                    className="btn btn-transparent border-0 btnforView"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                <div className="forget-group d-flex text-center gap-2 mt-4">
                  <p className="fw-medium">Already have an account?</p>
                  <Link to="/login" className="text-decoration-none fs-6 fw-bold">
                    Login
                  </Link>
                </div>
                <button
                  type="submit"
                  className={`btnForSignUp ${!formIsValid ? "disabled" : ""}`}
                >
                  Sign up
                </button>
              </form>
            </div>
            <div className="col-md-6 authImg">
              <img src={AuthImage} alt="Sign Up screen illustration" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
