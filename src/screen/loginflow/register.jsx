import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./register.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <Container className="signup-container">
      <div className="signup-header">
        {/* <img src={img} alt="App Logo" className="signup-logo" /> */}
        <h1>Shmangus</h1>
        <p className="signup-tagline">LEARN APP</p>
      </div>

      <h2 className="signup-title">Getting Started.!</h2>

      <Form className="signup-form">
        <Form.Group className="mb-3" controlId="formFullName">
          <div className="signup-input-group">
            <span className="signup-icon">
              <MdOutlineMailOutline />
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
              {showPassword ? <BsEyeSlash /> : <BsEye />}
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
          Sign In
          <span className="icon-wrapper">
            <FaArrowRight />
          </span>
        </Button>
      </Form>

      <div className="signup-alternatives">
        <p>Or Continue With</p>
        <Row>
          <Col className="text-center">
            <Button className="signup-alt-btn google rounded-circle">
              {/* <FaGoogle /> Google */}
              <FcGoogle />
            </Button>
          </Col>
          <Col className="text-center">
            <Button className="signup-alt-btn apple rounded-circle">
              <FaApple />
            </Button>
          </Col>
        </Row>
      </div>

      <p className="signup-footer">
        Already have an Account? <a href="/signin">SIGN IN</a>
      </p>
    </Container>
  );
};

export default SignUpForm;
