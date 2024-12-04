import React from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import "./dashboard.css";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container">
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
            <h5 className="mt-3">chetannn</h5>
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
            <ListGroup.Item style={{backgroundColor:"#8b82c3", color:"white"}}>Dashboard</ListGroup.Item>
            <ListGroup.Item>
              Online classes <Badge >0</Badge>
            </ListGroup.Item>
            <ListGroup.Item>Profile</ListGroup.Item>
            <ListGroup.Item>Change Password</ListGroup.Item>
            <ListGroup.Item>Test Result Show</ListGroup.Item>
            <ListGroup.Item>Payment Details</ListGroup.Item>
            <ListGroup.Item>Orders</ListGroup.Item>
            <ListGroup.Item>Logout</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={8} className="dashboard-content ms-3">
          <h4 className="dashboard-title text-center">Student Dashboard</h4>
          <hr />
          <Row>
            <Col md={4}>
              <Card.Title>Attempt Tests</Card.Title>
              <Card className="dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center">₹ 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card.Title>Number Of Order</Card.Title>
              <Card className="dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center">₹ 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card.Title>Total Payment</Card.Title>
              <Card className="dashboard-card">
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

export default Dashboard;
