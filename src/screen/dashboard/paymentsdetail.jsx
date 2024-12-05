import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import "./paymentdetails.css"; // Updated CSS class name
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../helper/storage";

const Paymentsdetail = () => {
  const [name, setname] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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

    // Redirect to the login page
    navigate("/");
  };

  return (
    <Container fluid className="paymentdetails-container">
      <Row className="mt-5">
        <Col md={3} className="paymentdetails-sidebar mt-2 ms-5">
          <div className="paymentdetails-profile-section text-center">
            <div className="paymentdetails-profile-picturees">
              <img
                src="https://teach.kavyasoftech.com/images/human.jpg"
                alt="Profile"
                className="rounded-circle mt-3"
              />
            </div>
            <h5 className="mt-3">{name ? name : "Guest"}</h5>
            <div className="paymentdetails-social-icons mt-2">
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
            <Link to="/Onlineclass">
              <ListGroup.Item>
                Online classes <Badge>0</Badge>
              </ListGroup.Item>
            </Link>

            <ListGroup.Item>Profile</ListGroup.Item>
            <ListGroup.Item>Change Password</ListGroup.Item>

            <Link to="/TestResult">
              <ListGroup.Item>Test Result Show</ListGroup.Item>
            </Link>

            {/* Payment Details Link */}
            <Link>
              <ListGroup.Item
                className="paymentdetails-item"
                style={{ backgroundColor: "#8b82c3", color: "white" }}
              >
                Payment Details
              </ListGroup.Item>
            </Link>

            <ListGroup.Item>Orders</ListGroup.Item>
            <ListGroup.Item onClick={handleLogout}>Logout</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={8} className="paymentdetails-content ms-3">
          <h4 className="paymentdetails-title text-center">
            Test Payment Details
          </h4>
          <hr />
          <Row>
            <Col md={2}>
              <Card.Title>Attempt Tests</Card.Title>
              <Card className="paymentdetails-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> Purchase Date</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card.Title>Number Of Order</Card.Title>
              <Card className="paymentdetails-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> Transaction Id</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card.Title>Total Payment</Card.Title>
              <Card className="paymentdetails-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center">Amount (₹)</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card.Title>Number Of Order</Card.Title>
              <Card className="paymentdetails-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center">
                    {" "}
                    Validity (days)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card.Title>Number Of Order</Card.Title>
              <Card className="paymentdetails-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> Test Name</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
              <Card.Title>Number Of Order</Card.Title>
              <Card className="paymentdetails-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> Package Name</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Paymentsdetail;
