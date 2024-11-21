import React, { useState } from "react";
import axios from "axios";
import "./forgetpassword.css";
import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "../../../assets/image/LOGO.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setError("");

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      return;
    }
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "75vh" }}
    >
      <img src={Logo} alt="App Logo" className="login-logo1" />
      {/* <img src="/images/LOGO.png" alt="App Logo" className="login-logo" /> */}

      <h2 className="mb-4">Forget Password?</h2>
      <Form
        onSubmit={handleSubmit}
        className="w-100"
        style={{ maxWidth: "500px" }}
      >
        <Form.Group className="mb-3" controlId="formEmail">
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
        </Form.Group>
        <Button className="login-button w-100 mb-3" type="submit">
          Sign In
          <span className="icon-wrapper">
            <FaArrowRight />
          </span>
        </Button>
      </Form>
      {error && <p className="text-danger mt-3">{error}</p>}
      {/* <ToastContainer /> */}
    </Container>
  );
};

export default ForgotPassword;
