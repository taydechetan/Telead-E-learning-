// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import { FaGoogle, FaArrowRight } from "react-icons/fa";
// import { BsEye, BsEyeSlash } from "react-icons/bs";
// import "./register.css";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa6";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { CiLock } from "react-icons/ci";
// import { FaRegUser } from "react-icons/fa";
// import Image from "../../assets/image/LOGO.png";
// import { AiOutlinePhone } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formdata, setFormdata] = useState({
//     name: "",
//     email: "",
//     password: "",
//     mobile: "",
//   });
//   console.log("formdata", formdata);

//   const handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setFormdata({
//       ...formdata,
//       [name]: value,
//     });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Container className="signup-container mt-5">
//       <div className="signup-header">
//         <img src={Image} alt="App Logo" className="signup-logoo" />

//       </div>

//       <h2 className="signup-title">Getting Started.!</h2>

//       <Form className="signup-form">
//         <Form.Group className="mb-3" controlId="formFullName">
//           <div className="signup-input-group">
//             <span className="signup-icon">

//               <FaRegUser />
//             </span>
//             <Form.Control
//               type="text"
//               placeholder="Full Name"
//               className="signup-input"
//               name="name"
//               value={formdata?.name}
//               onChange={handleChange}
//             />
//           </div>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formEmail">
//           <div className="signup-input-group">
//             <span className="signup-icon">
//               <MdOutlineMailOutline />
//             </span>
//             <Form.Control
//               type="email"
//               placeholder="Email"
//               className="signup-input"
//               name="email"
//               value={formdata.email}
//               onChange={handleChange}
//             />
//           </div>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formPassword">
//           <div className="signup-input-group">
//             <span className="signup-icon">
//               <CiLock />
//             </span>
//             <Form.Control
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="signup-input"
//               name="password"
//               value={formdata.password}
//               onChange={handleChange}
//             />
//             <span
//               className="signup-password-toggle"
//               onChange={togglePasswordVisibility}
//             >
//               {showPassword ? <BsEye /> : <BsEyeSlash />}
//             </span>
//           </div>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formPassword">
//           <div className="signup-input-group">
//             <span className="signup-icon">
//               <AiOutlinePhone />
//             </span>
//             <Form.Control
//               type={showPassword ? "text" : "password"}
//               placeholder="mobile"
//               className="signup-input"
//               name="mobile"
//               value={formdata.mobile}
//               onChange={handleChange}
//             />
//             <span
//               className="signup-password-toggle"
//               onClick={togglePasswordVisibility}
//             ></span>
//           </div>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formTerms">
//           <Form.Check
//             type="checkbox"
//             label="Agree to Terms & Conditions"
//             className="signup-terms"
//           />
//         </Form.Group>

//         <Button className="login-button w-100 mb-3" type="submit">
//           Sign Up
//           <span className="icon-wrapper">
//             <FaArrowRight />
//           </span>
//         </Button>
//       </Form>

//       <div className="signup-alternatives">
//         <p>Or Continue With</p>

//         <div className="register-social-buttons d-flex justify-content-center gap-3 mb-3">
//           <Button
//             variant="light"
//             className="register-social-button rounded-circle"
//           >
//             <FcGoogle />
//           </Button>
//           <Button
//             variant="light"
//             className="register-social-button rounded-circle"
//           >
//             <FaApple />
//           </Button>
//         </div>
//       </div>

//       <p className="signup-footer">
//         Already have an Account?{" "}
//         <Link to="/login" href="/sign-up">
//           {" "}
//           <a href="/signin">SIGN IN</a>{" "}
//         </Link>
//       </p>
//     </Container>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaArrowRight, FaRegUser } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup"; // Import Yup
import Image from "../../assets/image/LOGO.png";
import "./register.css";
import ApiEndPoints from "../../networkcall/apiendpoint";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({}); // To store validation errors
  const [load, setLoad] = useState(false);
  const [data, setData] = useState();

  // Yup schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Enter a valid 10-digit mobile number")
      .required("Mobile number is required"),
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate the form data

      await validationSchema.validate(formdata, { abortEarly: false });
      setErrors({}); // Clear errors if validation passes
      setLoad(true);

      // Create FormData object and append fields
      const formDataObj = new FormData();
      formDataObj.append("name", formdata.name);
      formDataObj.append("email", formdata.email);
      formDataObj.append("password", formdata.password);
      formDataObj.append("mobile", formdata.mobile);

      // API call
      const response = await fetch(ApiEndPoints.StdRegister, {
        method: "POST",
        body: formDataObj,
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      if (data.success) {
        toast.success(data?.msg);
        navigate("/login");
        setLoad(false);
      } else {
        setLoad(false);
        toast.error(data?.msg);
      }

      // Handle successful registration logic
    } catch (error) {
      if (error.inner) {
        // Handle validation errors
        const formattedErrors = {};
        error.inner.forEach((err) => {
          formattedErrors[err.path] = err.message;
        });
        setErrors(formattedErrors);
      } else {
        // Handle API or other errors
        console.error("Error during registration:", error.message);
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <Container style={{ marginTop: "75px" }} className="signup-container">
      {load && (
        <div style={loaderStyle}>
          <ClipLoader color={"#155239"} loading={load} size={50} />
        </div>
      )}

      <div className="signup-header">
        <img src={Image} alt="App Logo" className="signup-logoo" />
      </div>

      <h2 className="signup-title">Getting Started.!</h2>

      <Form className="signup-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <Form.Group className="mb-3" controlId="formFullName">
          <div className="signup-input-group">
            <span className="signup-icon">
              <FaRegUser />
            </span>
            <Form.Control
              type="text"
              placeholder="Full Name"
              className="signup-input"
              name="name"
              value={formdata.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <div className="signup-input-group">
            <span className="signup-icon">
              <MdOutlineMailOutline />
            </span>
            <Form.Control
              type="email"
              placeholder="Email"
              className="signup-input"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3" controlId="formPassword">
          <div className="signup-input-group">
            <span className="signup-icon">
              <CiLock />
            </span>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="signup-input"
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
            <span
              className="signup-password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </Form.Group>

        {/* Mobile */}
        <Form.Group className="mb-3" controlId="formMobile">
          <div className="signup-input-group">
            <span className="signup-icon">
              <AiOutlinePhone />
            </span>
            <Form.Control
              type="text"
              placeholder="Mobile"
              className="signup-input"
              name="mobile"
              value={formdata.mobile}
              onChange={handleChange}
            />
          </div>
          {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
        </Form.Group>

        {/* Terms and Conditions */}
        <Form.Group className="mb-3" controlId="formTerms">
          <Form.Check
            type="checkbox"
            label="Agree to Terms & Conditions"
            className="signup-terms"
          />
        </Form.Group>

        {/* Submit Button */}
        <Button className="login-button w-100 mb-3" type="submit">
          Sign Up
          <span className="icon-wrapper">
            <FaArrowRight />
          </span>
        </Button>
      </Form>

      <p className="signup-footer">
        Already have an Account?{" "}
        <Link to="/login" href="/sign-up">
          {" "}
          <a href="/signin">SIGN IN</a>{" "}
        </Link>
      </p>
    </Container>
  );
};
const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  background: "rgba(255, 255, 255, 0.8)", // Optional overlay
  zIndex: 9999,
};

export default Register;
