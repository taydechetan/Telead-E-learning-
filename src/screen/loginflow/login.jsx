import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaApple } from "react-icons/fa";
import { AiOutlineMail, AiOutlineEyeInvisible } from "react-icons/ai";
import "./login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiLock } from "react-icons/ci";
import Logoimg from "../../assets/image/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ApiEndPoints from "../../networkcall/apiendpoint";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";
import { setToken, setUserData } from "../../helper/storage";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedEmail) {
      setFormdata({
        email: storedEmail,
        password: storedPassword,
      });
      setRememberMe(true);
    }
  }, []);
  const [errors, setErrors] = useState({}); // To store validation errors
  const [load, setLoad] = useState(false);

  console.log("rememberMe>>>", rememberMe);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate the form data

      await validationSchema.validate(formdata, { abortEarly: false });
      setErrors({}); // Clear errors if validation passes
      setLoad(true);
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", formdata.email);
        localStorage.setItem("rememberedPassword", formdata.password);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }

      // Create FormData object and append fields
      const formDataObj = new FormData();

      formDataObj.append("email", formdata.email);
      formDataObj.append("password", formdata.password);

      // API call
      const response = await fetch(ApiEndPoints.Login, {
        method: "POST",
        body: formDataObj,
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      if (data.success) {
        toast.success(data?.msg);
        setToken(data?.result.api_token);
        setUserData(data?.result);
        navigate("/");
        window.location.reload();
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
    <Container style={{ marginTop: "35px" }} fluid className="login-wrapper">
      {load && (
        <div style={loaderStyle}>
          <ClipLoader color={"#155239"} loading={load} size={50} />
        </div>
      )}
      <Row className="login-row justify-content-center align-items-center">
        <Col xs={10} sm={8} md={6} lg={4} className="login-col mt-5">
          <div
            className="login-header text-center mb-4 d-flex"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Logoimg} alt="imgage" />
          </div>

          <h5 className="login-signin-title  mb-3" style={{ color: "#202244" }}>
            Let's Sign In!
          </h5>
          <p className="login-signin-subtitle  text-muted mb-4">
            Login to Your Account to Continue your Courses
          </p>

          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Group className="login-form-group mb-3" controlId="formEmail">
              <div className="login-input-group position-relative">
                <AiOutlineMail className="login-input-icon" />
                <Form.Control
                  placeholder="Email Address "
                  className="login-input rounded-end"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </Form.Group>
            {/* {console.log} */}
            <Form.Group
              className="login-form-group mb-3"
              controlId="formPassword"
            >
              <div className="login-input-wrapper position-relative">
                <CiLock className="login-input-icon" />

                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="login-input rounded-end"
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                />
                <span
                  className="login-eye-icon position-absolute"
                  onClick={togglePasswordVisibility}
                  style={{
                    cursor: "pointer",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                  }}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </Form.Group>

            <div className="login-options d-flex justify-content-between align-items-center mb-3">
              <Form.Check
                type="checkbox"
                label="Remember Me"
                className="login-remember-me"
                value={rememberMe}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Link to="/forgot-password" className="login-forgot-password">
                Forgot Password?
              </Link>
            </div>

            <Button className="login-button w-100 mb-3" type="submit">
              Sign In
              <span className="icon-wrapper">
                <FaArrowRight />
              </span>
            </Button>
            <p className="login-or text-center text-muted mb-3">
              Or Continue With
            </p>

            <div className="login-social-buttons d-flex justify-content-center gap-3 mb-3">
              <Button
                variant="light"
                className="login-social-button rounded-circle"
              >
                <FcGoogle />
              </Button>
              <Button
                variant="light"
                className="login-social-button rounded-circle"
              >
                <FaApple />
              </Button>
            </div>

            <p className="login-signup text-center">
              Don't have an Account?{" "}
              <Link
                to="/register"
                href="/sign-up"
                className="login-signup-link"
              >
                SIGN UP
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
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
  background: "rgba(255, 255, 255, 0.8)", 
  zIndex: 9999,
};

export default Login;
