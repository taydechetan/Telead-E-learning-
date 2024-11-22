import React, { useState } from "react";
import { Container, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { FaLock, FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import "./confrompassword.css";

const Confrompassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container
      fluid
      className="cp-container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row
        className="shadow-lg rounded cp-box  p-4"
        style={{ backgroundColor: "#F5F9FF", height: "70vh" }}
      >
        <Col className="confrompasscol">
          <h4 className="cp-title mb-4">Create Your New Password</h4>
          <Form>
            <InputGroup className="cp-input-group mb-3">
              <InputGroup.Text className="cp-icon-left">
                <FaLock />
              </InputGroup.Text>

              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="cp-input"
              />

              <InputGroup.Text
                className="cp-icon-right"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </InputGroup.Text>
            </InputGroup>

            <InputGroup className="cp-input-group mb-3">
              <InputGroup.Text className="cp-icon-left">
                <FaLock />
              </InputGroup.Text>

              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="cp-input"
              />

              <InputGroup.Text
                className="cp-icon-right"
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </InputGroup.Text>
            </InputGroup>

            <Button
              className="cp-button w-100 mb-3 d-flex align-items-center justify-content-arround mt-5"
              type="submit"
            >
              <span className="text-center">Continue</span>
              <span className="cp-icon-wrapper">
                <FaArrowRight />
              </span>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Confrompassword;
