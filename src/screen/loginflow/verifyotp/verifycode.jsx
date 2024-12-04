import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./verifyCode.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/image/LOGO.png";
import ApiEndPoints from "../../../networkcall/apiendpoint";
import toast from "react-hot-toast";
import * as Yup from "yup";


const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});

  const [formdata, setFormdata] = useState({
    email: "",
  });

  const handleInputChange = (value, index) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formdata, { abortEarly: false });
      setErrors({});
      setLoad(true);

      const response = await fetch(ApiEndPoints.Sendotpemail, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formdata.email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send OTP.");
      }

      const data = await response.json();
      console.log("dataa", data);

      if (data.success) {
        toast.success(data.msg || "OTP sent successfully!");
        setLoad(false);
      } else {
        setLoad(false);
        toast.error(data.msg || "Failed to send OTP.");
      }
    } catch (error) {
      setLoad(false);
      if (error.inner) {
        const formattedErrors = {};
        error.inner.forEach((err) => {
          formattedErrors[err.path] = err.message;
        });
        setErrors(formattedErrors);
      } else {
        console.error("Error:", error.message);
        toast.error("An error occurred while sending OTP.");
      }
    }
  };

  return (
    <Container
      fluid
      className="verify-container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="shadow-lg rounded verify-box   text-center">
        <Col xs={12} className="verfiyside" onSubmit={handleSubmit}>
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

          <Link>
            <Button
              className="verify-button mt-4  mb-3"
              type="submit"
              onClick={handleSubmit}
            >
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
