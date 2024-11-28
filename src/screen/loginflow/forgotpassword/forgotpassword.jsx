import React, { useState } from "react";
import axios from "axios";
import "./forgetpassword.css";
import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "../../../assets/image/LOGO.png";
import { AiOutlineMail } from "react-icons/ai";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

import * as Yup from "yup";
import ApiEndPoints from "../../../networkcall/apiendpoint";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  const [formdata, setFormdata] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({}); // To store validation errors
  console.log("ERRROR>>>>", errors);
  const [load, setLoad] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate the form data

      await validationSchema.validate(formdata, { abortEarly: false });
      setErrors({}); // Clear errors if validation passes
      setLoad(true);

      // Create FormData object and append fields
      const formDataObj = new FormData();

      formDataObj.append("email", formdata.email);

      // API call
      const response = await fetch(ApiEndPoints.ForgotPassword, {
        method: "POST",
        body: formDataObj,
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      if (data.success) {
        toast.success(data?.msg);
        // navigate("/login");
        setLoad(false);
      } else {
        setLoad(false);
        toast.error(data?.msg);
      }

      // Handle successful registration logic
    } catch (error) {
      if (error.inner) {
        // Handle validation errors
        const formattedErrors = {};
        error.inner.forEach((err) => {
          formattedErrors[err.path] = err.message;
        });
        setErrors(formattedErrors);
      } else {
        // Handle API or other errors
        console.error("Error during registration:", error.message);
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <Container
      style={{ marginTop: "40px" }}
      className="d-flex flex-column align-items-center justify-content-center forgetpasswordcont"
    >
      {load && (
        <div style={loaderStyle}>
          <ClipLoader color={"#155239"} loading={load} size={50} />
        </div>
      )}
      <div className="forgot-password-container">
        <div
          className="text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={Logo} alt="App Logo" className="img-logoo" />
        </div>

        <h2 className="mb-4">Forget Password?</h2>
        <Form
          onSubmit={handleSubmit}
          className="w-100"
          style={{ maxWidth: "500px" }}
        >
          {/* <Form.Group className="mb-3" controlId="formEmail">
          <div className="forgot-input-group">
            <span className="forgot-icon">
              <MdOutlineMailOutline />
            </span>
            <Form.Control
              type="email"
              placeholder="Email"
              className="forget-input"
            />
          </div>
        </Form.Group> */}
          <Form.Group className="login-form-group mb-3" controlId="formEmail">
            <div className="login-input-group position-relative">
              <AiOutlineMail className="login-input-icon" />
              <Form.Control
                type="email"
                placeholder="Email Address "
                className="login-input rounded-end"
                name="email"
                value={formdata.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </Form.Group>

          <Button className="login-button w-100 mb-3 mt-3" type="submit">
            Continue
            <span className="icon-wrapper">
              <FaArrowRight />
            </span>
          </Button>
        </Form>
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
      {/* <ToastContainer /> */}
    </Container>
  );
};
const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  background: "rgba(255, 255, 255, 0.8)", // Optional overlay
  zIndex: 9999,
};

export default ForgotPassword;
