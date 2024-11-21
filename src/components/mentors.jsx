import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./mentor.css";
import { IoIosArrowForward } from "react-icons/io";

const mentors = [
  {
    name: "Sonja",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Jensen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
  },
  {
    name: "Victoria",
    image:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    name: "Castaldo",
    image:
      "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
  },
];


const TopMentor = () => {
  return (
    <Container className="top-mentor-container">
      <Row className="top-mentor-header">
        <Col xs="auto" className="mentor-title">
          <h2>Top Mentor</h2>
        </Col>
        <Col xs="auto" className="mentor-see-all">
          <p>
            SEE ALL{" "}
            <span role="img" aria-label="arrow">
              <IoIosArrowForward />
            </span>
          </p>
        </Col>
      </Row>

      <Row>
        {mentors.map((mentor, index) => (
          <Col key={index} xs={6} sm={4} md={3} className="mentor-col">
            <div className="mentor-card">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="mentor-image"
              />
            </div>
            <p className="mentor-name">{mentor.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TopMentor;
