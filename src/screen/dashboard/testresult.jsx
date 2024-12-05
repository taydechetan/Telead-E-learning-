import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import "./testresult.css"; // Updated to use the renamed CSS file
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TestResult = () => {
  const [name, setname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = window.localStorage.getItem("@userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setname(parsedData.name);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("@userData");
    localStorage.removeItem("@userToken");
    setname("");
    navigate("/");
  };

  return (
    <Container fluid className="testresult-container">
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
            <ListGroup.Item
              style={{ backgroundColor: "#8b82c3", color: "white" }}
            >
              Test Result
            </ListGroup.Item>
            <Link to="/Onlineclass">
              <ListGroup.Item>
                Online classes <Badge>0</Badge>
              </ListGroup.Item>
            </Link>
            <ListGroup.Item>Profile</ListGroup.Item>
            <ListGroup.Item>Change Password</ListGroup.Item>
            <ListGroup.Item>Test Result Show</ListGroup.Item>
            <ListGroup.Item>Payment Details</ListGroup.Item>
            <ListGroup.Item>Orders</ListGroup.Item>
            <ListGroup.Item onClick={handleLogout}>Logout</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={8} className="testresult-content ms-3">
          <h4 className="testresult-title text-center">Student Test Result</h4>
          <hr />
          <Row>
            <Col md={4}>
              <Card.Title>Attempt Tests</Card.Title>
              <Card className="testresult-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card.Title>Number Of Order</Card.Title>
              <Card className="testresult-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card.Title>Total Payment</Card.Title>
              <Card className="testresult-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center">₹ 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TestResult;
