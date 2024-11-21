import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import "./App.css";
import "./Footer.css";
// import Images from "./Helper/Images";
import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <Container>
        <Row className="">
          <Image
            // src={Images.logo}
            alt="Company Logo"
            className="img-fluid mb-4"
            style={{ width: "180px" }}
          />
        </Row>
        <Row className="">
          {/* Company Section */}
          <Col md={3} xs={6} className="mb-3">
            <h6 className="font-weight-bold text-white">Company</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/">
                  {" "}
                  <a href="#">Home</a>
                </Link>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <Link to="/term-and-condition">
                  <a href="#">Terms & conditions</a>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <a href="#">Privacy policy</a>
                </Link>
              </li>
            </ul>
          </Col>

          {/* For Customers Section */}
          <Col md={3} xs={6} className="mb-3">
            <h6 className="font-weight-bold text-white">Popular Courses</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Graphic Design Advanced</a>
              </li>
              <li>
                <Link to="/user-guide">
                  <a href="#">Web Development Pro</a>
                </Link>
              </li>
              <li>
                <Link to="/blogs">
                  <a href="#">UI/UX Design Essentials</a>
                </Link>
              </li>
            </ul>
          </Col>

          {/* For Partners Section */}
          <Col md={3} xs={6} className="mb-3">
            <h6 className="font-weight-bold text-white">Categories</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">3D Design</a>
              </li>
              <li>
                <a href="#">Arts & Humanities</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">SEO&Marketing</a>
              </li>
            </ul>
          </Col>

          <Col md={3} xs={6} className=" text-md-left mb-3">
            <h6 className="font-weight-bold text-white">Social links</h6>
            <div className="d-flex justify-content-start justify-content-md-start mb-3 gap-3">
              <a href="#" className="text-white mr-3">
                <FaXTwitter size={25} />
              </a>
              <a href="#" className="text-white mr-3">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="text-white mr-3">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="text-white">
                <FaLinkedin size={25} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="pt-4 border-top mt-4">
          <Col className="text-center">
            <small>
              © Copyright 2024 Shmangus All rights reserved. | CIN:
              U74140DL8585PTC274413
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
