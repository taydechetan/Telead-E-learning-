import React from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "./congrats.css";
import Cimg from "../../../assets/image/Group 11.png";

const Congrats = () => {
  return (
    <Container
      fluid
      className="congrats-container d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={6} xl={8}>
          <Card className="congrats-card text-center p-4 shadow-lg">
            <Card.Body>
              <div className="congrats-icon mb-4">
                <img src={Cimg} alt="Secure Icon" className="w-50" />
              </div>
              <Card.Title className="congrats-title mb-3">
                Congratulations
              </Card.Title>
              <Card.Text className="congrats-text mb-4">
                Your Account is Ready to Use. You will be redirected to the Home
                Page in a Few Seconds.
              </Card.Text>
              <div className="congrats-spinner">
                <Spinner animation="border" variant="primary" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Congrats;
