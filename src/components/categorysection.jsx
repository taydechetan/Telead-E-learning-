import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  ];

  return (
    <Container fluid className="category-section-wrapper">
      <Row className="category-header-row align-items-center">
        <Col xs={6} sm={8}>
          <h2 className="category-header-title">Categories</h2>
        </Col>
        <Col xs={6} sm={4} className="text-end">
          <a href="/categories" className="category-see-all">
            SEE ALL{" "}
            <span className="category-arrow">
              <IoIosArrowForward />
            </span>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="category-list-container">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`category-item ${
                  index === 1 ? "category-item-active" : ""
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategorySection;
