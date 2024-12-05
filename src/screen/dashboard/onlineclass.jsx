import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import "./onlineclass.css";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Onlineclass = () => {
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

  const handleLogout = async () => {
    localStorage.removeItem("@userData");
    localStorage.removeItem("@userToken");
    setname("");
    navigate("/");
  };

  return (
    <Container fluid className="onlineclass-dashboard-container">
      <Row className="mt-5">
        <Col md={3} className="onlineclass-sidebar mt-2 ms-5">
          <div className="onlineclass-profile-section text-center">
            <div className="onlineclass-profile-picture">
              <img
                src="https://teach.kavyasoftech.com/images/human.jpg"
                alt="Profile"
                className="rounded-circle mt-3"
              />
            </div>
            <h5 className="mt-3">{name ? name : "Guest"}</h5>
            <div className="onlineclass-social-icons mt-2">
              <Link to="https://www.facebook.com/">
                <i className="onlineclass-social-icon">
                  <FaFacebookSquare />
                </i>
              </Link>

              <Link to="https://in.linkedin.com/">
                <i className="onlineclass-social-icon">
                  <FaLinkedin />
                </i>
              </Link>

              <Link to="https://x.com/?lang=en">
                <i className="onlineclass-social-icon">
                  <FaSquareXTwitter />
                </i>
              </Link>
            </div>
          </div>

          <ListGroup className="mt-4 mb-3">
            <ListGroup.Item>Dashboard</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#8b82c3", color: "white" }}>
              Online classes <Badge>0</Badge>
            </ListGroup.Item>
            <ListGroup.Item>Profile</ListGroup.Item>
            <ListGroup.Item>Change Password</ListGroup.Item>

             <Link to="/testresult" className="nodashhhh">
              <ListGroup.Item>Test Result Show</ListGroup.Item>
            </Link>

            <Link to="./Paymentsdetail" className="nodashhhh">
              <ListGroup.Item>Payment Details</ListGroup.Item>
            </Link>

            <Link to="./Courseslist" className="nodashhhh">
              <ListGroup.Item>Orders</ListGroup.Item>
            </Link>
            <ListGroup.Item onClick={handleLogout}>Logout</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={8} className="onlineclass-dashboard-content ms-3">
          <h4 className="onlineclass-dashboard-title text-center">
            Student Dashboard
          </h4>
          <hr />
          <Row>
            <Col md={3}>
              {/* <Card.Title>Attempt Tests</Card.Title> */}
              <Card className="onlineclass-dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> Title</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              {/* <Card.Title>Number Of Order</Card.Title> */}
              <Card className="onlineclass-dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> Duration</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              {/* <Card.Title>Total Payment</Card.Title> */}
              <Card className="onlineclass-dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center">Date</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              {/* <Card.Title>Total Payment</Card.Title> */}
              <Card className="onlineclass-dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center">Date</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Onlineclass;
