// import React from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import "./contactus.css";

// const Contactus = () => {
//   return (
//     <div className="contact-form-container py-5" style={{ marginTop: "70px" }}>
//       <Form
//         className="contact-form mx-auto p-4 shadow"
//         style={{ maxWidth: "600px" }}
//       >
//         <h1 className="contact-form-title text-center mb-4">Contact Us</h1>
//         <Form.Group className="mb-3 contact-form-group" controlId="formName">
//           <Form.Label className="contact-form-label">Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter your name"
//             className="contact-form-input"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3 contact-form-group" controlId="formEmail">
//           <Form.Label className="contact-form-label">Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter your email"
//             className="contact-form-input"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3 contact-form-group" controlId="formSubject">
//           <Form.Label className="contact-form-label">Subject</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter subject"
//             className="contact-form-input"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3 contact-form-group" controlId="formMessage">
//           <Form.Label className="contact-form-label">Message</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={4}
//             placeholder="Enter your message"
//             className="contact-form-input"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3 contact-form-group" controlId="formFile">
//           <Form.Label className="contact-form-label">Add Pictures</Form.Label>
//           <div className="file-upload-box text-center">
//             <label
//               className="file-upload-label d-block p-3 border border-secondary rounded"
//               htmlFor="fileInput"
//               style={{ cursor: "pointer" }}
//             >
//               Click here to upload
//             </label>
//             <input
//               type="file"
//               id="fileInput"
//               className="file-upload-input d-none"
//             />
//           </div>
//         </Form.Group>

//         <Button
//           type="submit"
//           className="submit-btn w-100 mt-3 py-2"
//           style={{ backgroundColor: "#0961f5", border: "none" }}
//         >
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Contactus;



import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./contactus.css";
import ApiEndPoints from "../../networkcall/apiendpoint";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare the data as FormData for file uploads
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("subject", formData.subject);
      formDataObj.append("message", formData.message);
      if (formData.file) formDataObj.append("file", formData.file);

      const response = await fetch(ApiEndPoints.Contactus, {
        method: "POST",
        body: formDataObj,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      const data = await response.json();
      toast.success("Message sent successfully!");
      console.log(data);

      // Reset the form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        file: null,
      });
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container py-5" style={{ marginTop: "70px" }}>
      <Form
        className="contact-form mx-auto p-4 shadow"
        style={{ maxWidth: "600px" }}
        onSubmit={handleSubmit}
      >
        <h1 className="contact-form-title text-center mb-4">Contact Us</h1>
        <Form.Group className="mb-3 contact-form-group" controlId="formName">
          <Form.Label className="contact-form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="contact-form-input"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 contact-form-group" controlId="formEmail">
          <Form.Label className="contact-form-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="contact-form-input"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 contact-form-group" controlId="formSubject">
          <Form.Label className="contact-form-label">Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="contact-form-input"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 contact-form-group" controlId="formMessage">
          <Form.Label className="contact-form-label">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="contact-form-input"
            required
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
              name="file"
              className="file-upload-input d-none"
              onChange={handleFileChange}
            />
          </div>
        </Form.Group>

        <Button
          type="submit"
          className="submit-btn w-100 mt-3 py-2"
          style={{ backgroundColor: "#0961f5", border: "none" }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
