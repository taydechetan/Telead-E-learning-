import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./register.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import Image from "../../assets/image/LOGO.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="signup-container mt-5">
      <div className="signup-header">
        <img src={Image} alt="App Logo" className="signup-logoo" />
        {/* <h1>Shmangus</h1>
        <p className="signup-tagline">LEARN APP</p> */}
      </div>

      <h2 className="signup-title">Getting Started.!</h2>

      <Form className="signup-form">
        <Form.Group className="mb-3" controlId="formFullName">
          <div className="signup-input-group">
            <span className="signup-icon">
              {/* <MdOutlineMailOutline /> */}
              <FaRegUser />
            </span>
            <Form.Control
              type="text"
              placeholder="Full Name"
              className="signup-input"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <div className="signup-input-group">
            <span className="signup-icon">
              <MdOutlineMailOutline />
            </span>
            <Form.Control
              type="email"
              placeholder="Email"
              className="signup-input"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <div className="signup-input-group">
            <span className="signup-icon">
              <CiLock />
            </span>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="signup-input"
            />
            <span
              className="signup-password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTerms">
          <Form.Check
            type="checkbox"
            label="Agree to Terms & Conditions"
            className="signup-terms"
          />
        </Form.Group>

        <Button className="login-button w-100 mb-3" type="submit">
          Sign Up
          <span className="icon-wrapper">
            <FaArrowRight />
          </span>
        </Button>
      </Form>

      <div className="signup-alternatives">
        <p>Or Continue With</p>
        {/* <Row className="g-5 justify-content-center align-items-center">
          <Col xs="auto" className="text-center">
            <p
              className="rounded-circle mb-0 p-2"
              style={{
                border: "1px solid #ddd",
                width: "40px",
                height: "40px",
              }}
            >
              <FcGoogle />
            </p>
          </Col>

          <Col xs="auto" className="text-center">
            <p
              className="rounded-circle mb-0 p-2"
              style={{
                border: "1px solid #ddd",
                width: "40px",
                height: "40px",
              }}
            >
              <FaApple />
            </p>
          </Col>
        </Row> */}

        <div className="register-social-buttons d-flex justify-content-center gap-3 mb-3">
          <Button
            variant="light"
            className="register-social-button rounded-circle"
          >
            <FcGoogle />
          </Button>
          <Button
            variant="light"
            className="register-social-button rounded-circle"
          >
            <FaApple />
          </Button>
        </div>
      </div>

      <p className="signup-footer">
        Already have an Account?{" "}
        <Link to="/login" href="/sign-up">
          {" "}
          <a href="/signin">SIGN IN</a>{" "}
        </Link>
      </p>
    </Container>
  );
};

export default Register;
