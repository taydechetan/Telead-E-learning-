import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CategorySection.css";
import { IoIosArrowForward } from "react-icons/io";

const CategorySection = () => {
  const categories = [
    "3D Design",
    "Arts & Humanities",
    "Graphic Design",
    "SEO&Marketing",
    "Web Development",
    "UI/UX Design",
    "UI/UX Design",
    "UI/UX Design",
    "UI/UX Design",
    "UI/UX Design",
    "UI/UX Design",
    "UI/UX Design",
  ];

  return (
    <Container className="category-section-wrapper mt-4">
      <Row className="category-header-row justify-content-around align-items-center">
        <Col xs={6} lg={6} sm={8}>
          <h2 className="category-header-title">Categories</h2>
        </Col>
        <Col xs={6} lg={5} sm={4} className="text-end">
          <a href="/categories" className="category-see-all">
            SEE ALL{" "}
            <span className="category-arrow">
              <IoIosArrowForward />
            </span>
          </a>
        </Col>
      </Row>
      <Row className="g-3 mt-3">
        {/* <div className="category-list-container"> */}
        {categories.map((category, index) => (
          <Col className="text-center" lg={2} md={3} sm={4} xs={6} key={index}>
            <Card
              key={index}
              className={`category-item ${
                index === 1 ? "category-item-active" : ""
              }`}
            >
              {category}
            </Card>
          </Col>
        ))}
        {/* </div> */}
      </Row>
    </Container>
  );
};

export default CategorySection;
