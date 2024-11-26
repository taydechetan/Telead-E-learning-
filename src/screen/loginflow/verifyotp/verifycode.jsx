import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./verifyCode.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/image/LOGO.png";

const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);

  const handleInputChange = (value, index) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <Container
      fluid
      className="verify-container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="shadow-lg rounded verify-box   text-center">
        <Col xs={12} className="verfiyside">
          <img src={Logo} alt="imgage" className="imgverify" />
          <h5 className="verify-heading mb-3 mt-3">
            Code has been sent to (+1) ***-***-529
          </h5>

          <div className="verify-input-group d-flex justify-content-center mb-3 mt-5">
            {code.map((digit, index) => (
              <Form.Control
                key={index}
                type="text"
                maxLength="1"
                className="verify-input mx-2 text-center"
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, index)}
              />
            ))}
          </div>

          <p className="verify-timer mt-4">
            Resend Code in{" "}
            <span className="verify-timer-highlight">{timer}s</span>
          </p>

          <Link to="/Confrompassword">
            <Button className="verify-button mt-4  mb-3" type="submit">
              Sign In
              <span className="verify-iconss">
                <FaArrowRight />
              </span>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default VerifyCode;
