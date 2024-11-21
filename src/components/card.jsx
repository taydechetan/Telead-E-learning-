import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./card.css";
import { IoIosArrowForward } from "react-icons/io";


const CardComponent = () => {
  const cardData = [
    {
      id: 1,
      title: "Graphic Design Advanced",
      category: "Graphic Design",
      price: "$28",
      rating: 4.2,
      students: "7830 Std",
      image: "https://www.goldtech.com.ng/assets/images/graphics-323x156.jpg",
    },
    {
      id: 2,
      title: "Web Development Pro",
      category: "Web Development",
      price: "$35",
      rating: 4.8,
      students: "9800 Std",
      image: "https://www.cdmi.in/courses@2x/web-developments.webp",
    },
    {
      id: 3,
      title: "UI/UX Design Essentials",
      category: "UI/UX Design",
      price: "$30",
      rating: 4.6,
      students: "6700 Std",
      image:
        "https://truevalueinfosoft.com/assets/img/blog/the-importance-of-uiux-design-in-web-and-mobile-development.jpg",
    },
    {
      id: 4,
      title: "Digital Marketing Mastery",
      category: "Digital Marketing",
      price: "$40",
      rating: 4.7,
      students: "8500 Std",
      image:
        "https://rooman.net/wp-content/uploads/2021/05/product-digital-marketing-fundamentals.jpg",
    },
  ];

  return (
    <Container fluid className="card-containerrr px-0">
      <Row className="card-header">
        <Col xs="auto">
          <h2 className="header-title">Popular Courses</h2>
        </Col>
        <Col xs="auto">
          <p className="header-see-all">
            SEE ALL{" "}
            <span className="header-arrow">
              <IoIosArrowForward />
            </span>
          </p>
        </Col>
      </Row>

      <Col>
        <ul className="responsive-list">
          <li>All</li>
          <li>Web Development</li>
          <li>Digital Marketing</li>
          <li>Web Designer</li>
          <li>3D Design</li>
          <li>Art Design</li>
        </ul>
      </Col>

      <Row className="mt-4">
        {cardData.map((card) => (
          <Col
            key={card.id}
            xs={12}
            sm={6}
            lg={3}
            className="d-flex justify-content-center mb-4"
          >
            <Card className="custom-card">
              <Card.Img variant="top" src={card.image} className="card-image" />
              <Card.Body>
                <small className="text-orange">{card.category}</small>
                <Card.Title className="card-title">{card.title}</Card.Title>
                <div className="card-details">
                  <span className="card-price">{card.price}</span>
                  <span className="card-rating">⭐ {card.rating}</span>
                  <span className="card-students">{card.students}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardComponent;
