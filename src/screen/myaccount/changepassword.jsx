import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./changepassword.css";
import ApiEndPoints from "../../networkcall/apiendpoint";

const Changepassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      setErrorMessage("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://173.212.250.62/shmangus/sh-admin/public/api/change-password", {
        currentPassword,
        newPassword,
      });

      if (response.status === 200) {
        setSuccessMessage("Password changed successfully.");
        setErrorMessage("");
        setCurrentPassword("");
        setNewPassword("");
      } else {
        setErrorMessage(response.data.msg);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <Container fluid className="personalinformation mt-5">
      <h3 className="heading-text">Home / Profile</h3>

      <Row className="mainrowcs">
        {/* Sidebar */}
        <Col md={4} className="sidebar-container">
          <div className="account-section mb-4">
            <IoPerson className="icon" />
            <h3>My Account</h3>
          </div>
          <ul className="menu-list">
            <Link to="/studentprofile" className="menu-link">
              <li className="menu-item">
                Personal Information
                <MdArrowForwardIos />
              </li>
            </Link>
            <Link to="/" className="menu-link">
              <li className="menu-item">
                Package List
                <MdArrowForwardIos />
              </li>
            </Link>
            <Link to="/Changepassword" className="menu-link">
              <li className="menu-item active">
                Change Password
                <MdArrowForwardIos />
              </li>
            </Link>
          </ul>
        </Col>

        {/* Main Content */}
        <Col md={6}>
          <div className="box-container">
            <h2>Change Password</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}

            <Form onSubmit={handleUpdate}>
              <Form.Group controlId="currentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="newPassword" className="mt-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="button-group mt-4">
                <Button variant="primary" type="submit" className="me-2">
                  Update
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Changepassword;
