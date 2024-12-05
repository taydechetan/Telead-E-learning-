import React, { useState } from "react";
import {
  InputGroup,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

import { FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
// import overall from "../mailto:image/oval@2x.png";
// import fil from "../Image/Fill 1.png";
import "react-phone-input-2/lib/style.css";

import Imagess from "../../../assets/image/Icon (1).png";
import overall from "../../../assets/image/Fill 1@3x.png";
import fill from "../../../assets/image/Oval.png";
import PhoneInput from "react-phone-input-2";
import "./Profilepage.css";

const Profilepage = () => {
  const [phone, setPhone] = useState("");
  // const [phoneNumber, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("in");
  const [formData, setFormData] = useState({
    fullName: "",
    nickName: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handlePhoneChange = (value, country) => {
    const countryCode = country.dialCode;
    const phoneNumber = value.slice(countryCode.length);
    setCountryCode(countryCode);
    setPhone(phoneNumber);
    setFormData({
      ...formData,
      mobile_number: phoneNumber,
      country_code: countryCode,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container fluid className="profile-page-wrapper py-5 m-0 mt-5">
      <Row className="profile-page-row justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={4} className="profile-page-col">
          <Card className="profile-page-card shadow p-4 bg-light">
            <Row className="profile-header align-items-center">
              <Col xs="auto">
                <Button
                  variant="link"
                  className="profile-back-btn p-0 text-dark"
                >
                  <i className="bi bi-arrow-left fs-4"></i>
                </Button>
              </Col>
              {/* <Col>
                <h5 className="profile-title mb-0 fw-bold">
                  Fill Your Profile
                </h5>
              </Col> */}
            </Row>

            <Row className="profile-pic-row justify-content-center text-center mb-4">
              <Col xs="auto" className="profile-pic-col position-relative">
                <img className="overallimage" src={overall} alt="imgage" />
                <span>
                  {" "}
                  {/* <img className="filimage" src={fill} alt="imgage" /> */}
                </span>
                <Button
                  variant="success"
                  size="sm"
                  className="profile-edit-btn position-absolute bottom-0 end-0 rounded-circle p-1"
                >
                  <span className="pngtagg">
                    <img className="pngtagg" src={Imagess}></img>
                  </span>
                </Button>
              </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="form-group mb-3">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-inputrounded-end-pill"
                />
              </Form.Group>

              <Form.Group className="form-group mb-3">
                <Form.Control
                  type="text"
                  placeholder="Nick Name"
                  name="nickName"
                  value={formData.nickName}
                  onChange={handleChange}
                  className="form-inputrounded-end-pill"
                />
              </Form.Group>

              <Form.Group className="form-group mb-3" controlId="">
                <div className="form-date-group position-relative">
                  {/* <FaCalendarAlt
                    className="form-date-icon position-absolute text-secondary"
                    style={{ fontSize: "1.5rem", top: "15px", left: "10px" }}
                  /> */}
                  <Form.Control
                    type="date"
                    placeholder="Date of Birth"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="form-input rounded-end-pill"
                  />
                </div>
              </Form.Group>

              <Form.Group className="form-group mb-3">
                <div className="form-date-group position-relative">
                  <MdOutlineMail
                    className="form-date-icon position-absolute text-secondary"
                    style={{ fontSize: "1.5rem", top: "19px", left: "10px" }}
                  />

                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input rounded-end-pill ps-5"
                  />
                </div>
              </Form.Group>

              <Form.Group className="form-group mb-3">
                <PhoneInput
                  country={"in"}
                  name="mobile_number"
                  value={`${countryCode}${phone}`}
                  onChange={(value, country) =>
                    handlePhoneChange(value, country)
                  }
                  inputProps={{
                    name: "country_code",
                    required: true,
                    autoFocus: true,
                  }}
                  containerStyle={{ width: "100%" }}
                  inputStyle={{
                    width: "100%",
                    paddingLeft: "50px",
                    fontSize: "16px",
                    height: "45px",
                  }}
                />
              </Form.Group>

              {/* <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-inputrounded-end-pill"
                /> */}

              <Form.Group className="form-group mb-3 border">
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="form-select rounded-end-pill"
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Button className="form-submit-btn  w-100 mb-3" type="submit">
                  Continue
                  <span className="arrow-box">
                    <FaArrowRight />
                  </span>
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profilepage;
