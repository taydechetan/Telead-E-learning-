// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Container, Card } from "react-bootstrap";

// const CourseDetails = () => {
//   const location = useLocation();
//   const courseData = location.state;

//   return (
//     <Container className="mt-5">
//       <Card className="p-4">
//         <Card.Img variant="top" src={courseData.image} alt={courseData.title} style={{width:"200px"}} />
//         <Card.Body>
//           <h3>{courseData.title}</h3>
//           <p>Category: {courseData.category}</p>
//           <p>Price: {courseData.price}</p>
//           <p>Rating: ⭐ {courseData.rating}</p>
//           <p>Students: {courseData.students}</p>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default CourseDetails;

import React from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import "./coursecard.css";
import { useLocation } from "react-router-dom";

const CourseDetails = () => {
  const location = useLocation();
  const courseData = location.state;

  return (
    <Container
      fluid
      className="course-container"
      style={{ marginTop: "200px" }}
    >
      <Row className="justify-content-center"  style={{ marginLeft: "100px", marginRight: "100px" }}>
        <Col
          lg={8}
          md={12}
          className="course-details-section"
          style={{ margin: "0 auto", padding: "0 20px" }}
        >
          <Tab.Container defaultActiveKey="courseAdvisor">
            <Nav variant="tabs" className="course-tabs">
              <Nav.Item>
                <Nav.Link eventKey="overview" className="tab-link">
                  Overview
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="curriculum" className="tab-link">
                  Course Curriculum
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="courseAdvisor" className="tab-link">
                  Course Advisor
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="certification" className="tab-link">
                  Certification
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reviews" className="tab-link">
                  Reviews
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="faqs" className="tab-link">
                  FAQs
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="courseAdvisor" className="tab-content">
                <h5>Course Instructor</h5>
                <Row className="d-flex align-items-center">
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={2}
                    className="d-flex  justify-content-end align-items-center"
                  >
                    <img
                      src={courseData.image}
                      alt={courseData.title}
                      className="course-image img-fluid"
                      style={{ maxWidth: "200px", borderRadius: "8px" }}
                    />
                  </Col>

                  <Col>
                    <p className="instructor-name">{courseData.title}</p>
                  </Col>
                </Row>
                <p className="course-description">
                  Welcome to the Ultimate Web Developer Bootcamp. This is your
                  one-stop-shop to{" "}
                  <strong>learn front-end AND back-end development</strong>.
                </p>
                <p>
                  Well take you from absolute beginner to competent full-stack
                  web developer in a matter of weeks.
                </p>
                <h6>Who Should Take This Course?</h6>
                <ul>
                  <li>Anyone who is curious about programming</li>
                  <li>Entrepreneurs</li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>

        <Col lg={4} md={12} className="course-purchase-section">
          <div className="price-section">
            <h3> {courseData.price}</h3>
            <span className="original-price">$3199</span>
            <span className="discount">87.56% Off</span>
          </div>
          <Button className="add-to-cart-btn">Add to Cart</Button>
          <Button className="buy-now-btn">Buy Now</Button>
          <ul className="course-highlights">
            <li>42.5 hours on-demand video</li>
            <li>5 coding exercises</li>
            <li>39 articles</li>
            <li>9 downloadable resources</li>
            <li>Access on mobile and TV</li>
            <li>Certificate of completion</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;

