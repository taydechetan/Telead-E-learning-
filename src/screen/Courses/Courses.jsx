import React, { useEffect } from "react";
import { Card, Row, Col, Badge, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Images from "../../helper/Images";
import "./Courses.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../components/cartcontext";
const Courses = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart, addToCart } = useCart();
  const selectedCourse = location.state?.selectedCourse;

  useEffect(() => {
    if (selectedCourse && !cart.some(item => item.id === selectedCourse.id)) {
      addToCart(selectedCourse);  // Add the course to the cart
    }
  }, [selectedCourse, cart, addToCart]);
  
  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
    {
      image:
        "https://img.freepik.com/free-photo/ideas-design-draft-creative-sketch-objective-concept_53876-121105.jpg",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624555130666-eb3a38b6c3b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      rating: 4.5,
      description: "Graphic Design Advanced",
      price: "24",
      ratting: "4.2",
      students: "7830 ",
    },
  ];

  const handleCardClick = (course) => {
    navigate("/cart", { state: { selectedCourse: course } });
  };


  return (
    <Container className=" shadow mb-3 p-3" style={{ marginTop: "80px" }}>
      <Row className="align-items-center mb-3">
        <Col
          lg={"auto"}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            onClick={() => navigate(-1)}
            src={Images.BackArrow}
            alt="Back"
            style={{
              cursor: "pointer", 
            }}
          />
        </Col>

        <Col lg={11} className="d-flex align-items-center">
          <h3 className="text-start fw-bold" style={{ margin: "0 0 0 10px" }}>
            Top Courses
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-around g-2">
        {cardData.map((card, index) => (
          <Col lg={4}>
            <Card
              style={{
                width: "100%",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => handleCardClick(card)}
            >
              <Row>
                {/* Left Image Section */}
                <Col xs={4} lg={4} className=" ">
                  <img src={card.image} alt="" className="image-hover" />
                </Col>

                <Col xs={8} lg={8}>
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Text
                        style={{ fontSize: "0.9rem", color: "#FF6600" }}
                      >
                        {card.title}
                      </Card.Text>
                      {/* <Badge
                         style={{
                           color: "#0D6EFD",
                           borderRadius: "50%",
                         }}
                       > */}
                      <img
                        style={{ width: "12px", height: "16px" }}
                        src={Images.Badge}
                      />
                      {/* </Badge> */}
                    </div>
                    <Card.Title
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        margin: "10px 0",
                      }}
                    >
                      {card.description}
                    </Card.Title>
                    <div className="d-flex align-items-center">
                      <span
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "700",
                          color: "#007BFF",
                          marginRight: "10px",
                        }}
                      >
                        ${card.price}
                      </span>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          textDecoration: "line-through",
                          color: "#A0A0A0",
                        }}
                      >
                        $42
                      </span>
                    </div>
                    <div className=" align-items-center mt-2">
                      <FaStar
                        style={{ color: "#FFC107", marginRight: "5px" }}
                      />
                      <span style={{ fontSize: "0.9rem", marginRight: "10px" }}>
                        {card.ratting}
                      </span>
                      <span style={{ fontSize: "0.9rem", color: "#A0A0A0" }}>
                        | {card.students} Std
                      </span>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
