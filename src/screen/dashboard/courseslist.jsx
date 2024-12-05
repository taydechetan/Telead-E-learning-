import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import "./courseslist.css";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../helper/storage";

const Courseslist = () => {
  const [name, setname] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = window.localStorage.getItem("@userData");
    // console.log("hhhhhhhhhhh",userData);
    if (userData) {
      const parsedData = JSON.parse(userData);
      setname(parsedData.name);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const opendashboard = () => {
    Navigate("/Dashboard");
  };

  const handleLogout = async () => {
    localStorage.removeItem("@userData");
    localStorage.removeItem("@userToken");

    setname("");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <Container fluid className="Courseslist-container">
      {" "}
      <Row className="mt-5">
        <Col md={3} className="sidebar mt-2 ms-5">
          <div className="profile-section text-center">
            <div className="profile-picturees">
              <img
                src="https://teach.kavyasoftech.com/images/human.jpg"
                alt="Profile"
                className="rounded-circle mt-3"
              />
            </div>
            <h5 className="mt-3">{name ? name : "Guest"}</h5>
            <div className="social-icons mt-2">
              <Link to="https://www.facebook.com/">
                <i className="bi bi-facebook mx-2">
                  <FaFacebookSquare />
                </i>
              </Link>

              <Link to="https://in.linkedin.com/">
                <i className="bi bi-linkedin mx-2">
                  <FaLinkedin />
                </i>
              </Link>

              <Link to="https://x.com/?lang=en">
                <i className="bi bi-x-circle mx-2">
                  <FaSquareXTwitter />
                </i>
              </Link>
            </div>
          </div>

          <ListGroup className="mt-4 mb-3">
            <Link className="no-underline" onClick={opendashboard}>
              <ListGroup.Item>Dashboard</ListGroup.Item>
            </Link>

            <Link to="/Onlineclass" className="no-underline">
              <ListGroup.Item>
                Online classes <Badge>0</Badge>
              </ListGroup.Item>
            </Link>

            <ListGroup.Item>Profile</ListGroup.Item>
            <ListGroup.Item>Change Password</ListGroup.Item>

            <Link to="/TestResult" className="no-underline">
              <ListGroup.Item>Test Result Show</ListGroup.Item>
            </Link>

            <Link to="./Paymentsdetail" className="no-underline">
              <ListGroup.Item>Payment Details</ListGroup.Item>
            </Link>
            
            <ListGroup.Item
              style={{ backgroundColor: "#8b82c3", color: "white" }}
            >
              Orders
            </ListGroup.Item>
            <ListGroup.Item onClick={handleLogout}>Logout</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={8} className="Courseslist-content ms-3">
          {" "}
          <h4 className="Courseslist-title text-center">
            My Courses List
          </h4>{" "}
          <hr />
          <Row className="Courseslist">
            {" "}
            <Col md={6}>
              <Card className="Courseslist-card">
                {" "}
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> #</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="Courseslist-card">
                {" "}
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> Course Name</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Courseslist;
