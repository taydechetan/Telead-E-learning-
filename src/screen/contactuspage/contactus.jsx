import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./contactus.css";

const Contactus = () => {
  return (
    <div className="contact-form-container py-5" style={{ marginTop: "70px" }}>
      <Form
        className="contact-form mx-auto p-4 shadow"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="contact-form-title text-center mb-4">Contact Us</h1>
        <Form.Group className="mb-3 contact-form-group" controlId="formName">
          <Form.Label className="contact-form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            className="contact-form-input"
          />
        </Form.Group>

        <Form.Group className="mb-3 contact-form-group" controlId="formEmail">
          <Form.Label className="contact-form-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="contact-form-input"
          />
        </Form.Group>

        <Form.Group className="mb-3 contact-form-group" controlId="formSubject">
          <Form.Label className="contact-form-label">Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            className="contact-form-input"
          />
        </Form.Group>

        <Form.Group className="mb-3 contact-form-group" controlId="formMessage">
          <Form.Label className="contact-form-label">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            className="contact-form-input"
          />
        </Form.Group>

        <Form.Group className="mb-3 contact-form-group" controlId="formFile">
          <Form.Label className="contact-form-label">Add Pictures</Form.Label>
          <div className="file-upload-box text-center">
            <label
              className="file-upload-label d-block p-3 border border-secondary rounded"
              htmlFor="fileInput"
              style={{ cursor: "pointer" }}
            >
              Click here to upload
            </label>
            <input
              type="file"
              id="fileInput"
              className="file-upload-input d-none"
            />
          </div>
        </Form.Group>

        <Button
          type="submit"
          className="submit-btn w-100 mt-3 py-2"
          style={{ backgroundColor: "#0961f5", border: "none" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contactus;
