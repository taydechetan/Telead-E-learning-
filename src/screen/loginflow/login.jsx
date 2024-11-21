import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaApple } from "react-icons/fa";
import { AiOutlineMail, AiOutlineEyeInvisible } from "react-icons/ai";
import "./login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiLock } from "react-icons/ci";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container fluid className="login-wrapper">
      <Row className="login-row justify-content-center align-items-center">
        <Col xs={10} sm={8} md={6} lg={4} className="login-col">
          <div
            className="login-header text-center mb-4 d-flex"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454"
              alt="App Logo"
              className="login-logo"
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4 className="login-title mt-3">Shmangus</h4>
              <p className="login-subtitle text-muted">Learning web </p>
            </div>
          </div>

          <h5 className="login-signin-title  mb-3" style={{ color: "#202244" }}>
            Let's Sign In!
          </h5>
          <p className="login-signin-subtitle  text-muted mb-4">
            Login to Your Account to Continue your Courses
          </p>

          <Form className="login-form">
            <Form.Group className="login-form-group mb-3" controlId="formEmail">
              <div className="login-input-group position-relative">
                <AiOutlineMail className="login-input-icon" />
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="login-input rounded-end"
                />
              </div>
            </Form.Group>

            <Form.Group
              className="login-form-group mb-3"
              controlId="formPassword"
            >
              <div className="login-input-wrapper position-relative">
                <CiLock className="login-input-icon" />

                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="login-input rounded-end"
                />
                <span
                  className="login-eye-icon position-absolute"
                  onClick={togglePasswordVisibility}
                  style={{
                    cursor: "pointer",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                  }}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </Form.Group>

            <div className="login-options d-flex justify-content-between align-items-center mb-3">
              <Form.Check
                type="checkbox"
                label="Remember Me"
                className="login-remember-me"
              />
              <a href="/forgot-password" className="login-forgot-password">
                Forgot Password?
              </a>
            </div>

            <Button className="login-button w-100 mb-3" type="submit">
              Sign In
              <span className="icon-wrapper">
                <FaArrowRight />
              </span>
            </Button>
            <p className="login-or text-center text-muted mb-3">
              Or Continue With
            </p>

            <div className="login-social-buttons d-flex justify-content-center gap-3 mb-3">
              <Button
                variant="light"
                className="login-social-button rounded-circle"
              >
                <FcGoogle />
              </Button>
              <Button
                variant="light"
                className="login-social-button rounded-circle"
              >
                <FaApple />
              </Button>
            </div>

            <p className="login-signup text-center">
              Don't have an Account?{" "}
              <a href="/sign-up" className="login-signup-link">
                SIGN UP
              </a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
