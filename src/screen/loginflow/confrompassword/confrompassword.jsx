import React, { useState } from "react";
import { Container, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { FaLock, FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import "./confrompassword.css";
import Logoimage from "../../../assets/image/LOGO.png";
import { Link } from "react-router-dom";

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
      style={{ minHeight: "80vh" }}
    >
      <Row className="pillarrr  shadow-lg rounded cp-box text-center  p-4 mt-5 px-3 px-md-0">
        <Col className="confrompasscol">
          <img src={Logoimage} alt="imgage" className="confromighhttrtg" />
          <Form className="px-lg-5 px-md-4">
            <h4 className="cp-title mb-4 text-start mt-4">
              Create Your New Password
            </h4>
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

            <Link to="/Congrats">
              <Button
                className="cp-button w-100 mb-3 d-flex align-items-center  mt-5"
                type="submit"
              >
                <span className="mx-auto">Continue</span>
                <span className="cp-icon-wrapper">
                  <FaArrowRight />
                </span>
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Confrompassword;
