import React from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import "./coursecard.css";
import { useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
// import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/cartcontext";

const Coursecard = () => {
  const location = useLocation();
  const courseData = location.state;

  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // addToCart(courseData);
    // navigate("/cart");
    const courseExists = cart.some((item) => item.id === courseData.id);

    if (courseExists) {
      alert("Course already added to cart");
    } else {
      addToCart(courseData);
      alert("Course added to cart");
      navigate("/cart");
    }
  };

  const tabData = {
    overview: (
      <>
        <h5>Key Features</h5>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Earn a Full Stack Development certificate of completion from IITM
            Pravartak and Simplilearn
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            40+ micro skilling exercises & 6+ work-like professional projects
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Fast-track your learning with the help of AI coding assistant tools
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Attend masterclasses from IIT faculty
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Develop expertise in 10+ full stack development tools and frameworks
          </li>
        </ul>

        <p className="font-weight-bold mt-4">WHAT YOU WILL LEARN </p>
        <ul className="list-unstyled">
          <li>MongoDB</li>
          <li>Node</li>
          <li>Javascript</li>
          <li>DOM Manipulation</li>
          <li>Bootstrap 4</li>
        </ul>
      </>
    ),
    curriculum: (
      <>
        <h5>Skilled Coverd </h5>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Full Stack Development
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Database Management
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Web Development
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Server Side Development
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaCheck style={{ color: "#0b9f85", marginRight: "10px" }} />
            Testing and Quality Assurance
          </li>
        </ul>

        <h5 className="font-weight-bold mt-4">WHAT YOU WILL LEARN </h5>
        <ul className="list-unstyled">
          <li>MongoDB</li>
          <li>Node</li>
          <li>Javascript</li>
          <li>DOM Manipulation</li>
          <li>Bootstrap 4</li>
        </ul>
      </>
    ),
    courseAdvisor: (
      <>
        <h5>Course Instructor</h5>
        <Row className="d-flex align-items-center mt-3">
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={2}
            className="d-flex justify-content-end align-items-center"
          >
            <img
              src={courseData.image}
              alt={courseData.title}
              className="course-image img-fluid"
              style={{ borderRadius: "8px" }}
            />
          </Col>
          <Col>
            <p className="instructor-name">{courseData.title}</p>
          </Col>
        </Row>
        <p className="mt-3">
          Welcome to the Ultimate Web Developer Bootcamp. This is your
          one-stop-shop to <b>learn front-end AND back-end development.</b>{" "}
          We'll take you from absolute beginner to competent full-stack web
          developer in a matter of weeks.
        </p>

        <h5>WHO SHOULD TAKE THIS COURSE?</h5>
        <ul
          className="mb-4"
          style={{ listStyle: "none", padding: 0, margin: 0 }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            Anyone who wants to become a full-stack web developer
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            Anyone who wants to learn web development
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            Students & teenagers
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            Serious coders & hobbyists
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            Students & teenagers
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            Those looking for a career change
          </li>
        </ul>
      </>
    ),
    faqs: (
      <>
        <h5>FAQQ</h5>
        <ul>
          <li>
            <strong>Q:</strong> How long do I have access to the course?
            <br />
            <strong>A:</strong> Lifetime access!
          </li>
          <li>
            <strong>Q:</strong> Are there prerequisites?
            <br />
            <strong>A:</strong> No prior programming experience required.
          </li>
        </ul>
      </>
    ),
    certification: (
      <>
        <h5>PMP Exam & Certification</h5>
        <p>
          Welcome to the Ultimate Web Developer Bootcamp. This is your
          one-stop-shop to learn <b>front-end AND back-end development.</b>
        </p>
        {/* Today CourseCard section Page design completed and added a card details  */}
        <p>
          We'll take you from absolute beginner to competent full-stack web
          developer in a matter of weeks.
        </p>

        <p className="font-weight-bold">WHO SHOULD TAKE THIS COURSE?</p>

        <ul>
          <li> Anyone who wants to become a full-stack web developer</li>
          <li>Anyone who wants to learn web development</li>
          <li>Students & teenagers</li>
          <li>Serious coders & hobbyists</li>
          <li>Students & teenagers</li>
          <li>Those looking for a career change</li>
        </ul>
      </>
    ),
    reviews: (
      <>
        <h5>Course Reviews</h5>

        <div className="d-flex flex-column flex-lg-row align-items-start justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/024/344/088/small/businessman-isolated-illustration-ai-generative-free-png.png"
              alt="User"
              className="review-image"
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
            <div>
              <p className="mb-1 fw-bold">Deepak Yadav</p>
              <p className="mb-0 text-warning">⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          <div className="d-flex flex-column align-items-start">
            <p className="text-muted small">1 year ago</p>
            <p style={{ width: "400px" }}>
              This course has been a game-changer for me. The instructors are
              knowledgeable and engaging, and the content is well-structured and
              easy to understand. I highly recommend it!
            </p>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row align-items-start justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="https://teach.kavyasoftech.com/storage/uploads/users/profile-image-1672824902.png"
              alt="User"
              className="review-image"
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
            <div>
              <p className="mb-1 fw-bold">John Doe</p>
              <p className="mb-0 text-warning">⭐⭐⭐⭐</p>
            </div>
          </div>

          <div className="d-flex flex-column align-items-start">
            <p className="text-muted small">1 year ago</p>
            <p>For me, it's a good course!</p>
          </div>
        </div>
      </>
    ),
    faqs: (
      <>
        <h5>FAQs</h5>
        <ul>
          <li>
            <strong>Q:</strong> How long do I have access to the course?
            <br />
            <strong>A:</strong> Lifetime access!
          </li>
          <li>
            <strong>Q:</strong> Are there prerequisites?
            <br />
            <strong>A:</strong> No prior programming experience required.
          </li>
        </ul>
      </>
    ),
  };

  return (
    <Container fluid className="course-container" style={{ marginTop: "90px" }}>
      <Row
        className="course-row justify-content-center"
        style={{ marginLeft: "100px", marginRight: "100px" }}
      >
        <Col
          lg={12}
          className="text-center mb-5 headingg-sectionn"
          style={{ backgroundColor: "#0b9f85", color: "white" }}
        >
          <h1 className="coursec-titlee mt-3">{courseData.title}</h1>
          <p className="coursec-subtitlee" style={{ color: "white" }}>
            Dive into our comprehensive course to enhance your skills and
            knowledge.
          </p>
        </Col>

        <Col
          lg={8}
          md={12}
          className="course-details-section"
          style={{ margin: "0 auto", padding: "0 20px" }}
        >
          <Tab.Container defaultActiveKey="overview">
            <Nav variant="tabs" className="course-tabs">
              {Object.keys(tabData).map((key) => (
                <Nav.Item key={key}>
                  <Nav.Link eventKey={key} className="tab-link">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content>
              {Object.entries(tabData).map(([key, content]) => (
                <Tab.Pane eventKey={key} key={key} className="tab-content mt-5">
                  {content}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </Col>
        <Col
          lg={4}
          md={12}
          className="course-purchase-section mb-4"
          style={{
            // maxWidth: "300px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="price-section">
            <h3>{courseData.price}</h3>
            <span className="original-price">$3199</span>
            <span className="discount">87.56% Off</span>
          </div>
          <Button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </Button>
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

export default Coursecard;
