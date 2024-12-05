import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Images from "../../helper/Images";
import { useNavigate } from "react-router-dom";

const MentorScreen = () => {
  const navigate = useNavigate();
  const mentor = [
    {
      name: "Sonja",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      subject: "Graphic Design",
    },
    {
      name: "Jensen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      subject: "Graphic Design",
    },
    {
      name: "Victoria",
      image:
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      subject: "Graphic Design",
    },
    {
      name: "Castaldo",
      image:
        "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      subject: "Graphic Design",
    },
    {
      name: "Castaldo",
      image:
        "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      subject: "Graphic Design",
    },
    {
      name: "Castaldo",
      image:
        "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      subject: "Graphic Design",
    },
    {
      name: "Sonja",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      subject: "Graphic Design",
    },
    {
      name: "Jensen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
      subject: "Graphic Design",
    },
    {
      name: "Victoria",
      image:
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      subject: "Graphic Design",
    },
    {
      name: "Castaldo",
      image:
        "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      subject: "Graphic Design",
    },
    {
      name: "Castaldo",
      image:
        "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      subject: "Graphic Design",
    },
    {
      name: "Castaldo",
      image:
        "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      subject: "Graphic Design",
    },
  ];
  return (
    <Container className="shadow mb-2" style={{ marginTop: "80px" }}>
      <Row className="align-items-center mb-3">
        {/* Back Arrow Section */}
        <Col
          lg={"auto"}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            onClick={() => navigate(-1)}
            src={Images.BackArrow}
            alt="Back"
            style={{
              cursor: "pointer", // Indicates clickable action
            }}
          />
        </Col>

        {/* Heading Section */}
        <Col lg={11} className="d-flex align-items-center">
          <h3 className="text-start fw-bold" style={{ margin: "0 0 0 10px" }}>
            Top Mentors
          </h3>
        </Col>
      </Row>
      <Row className="g-2">
        {mentor.map((mentor, index) => (
          <Col lg={4}>
            {" "}
            <Card
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            >
              <Row className="align-items-center">
                {/* Profile Image */}
                <Col lg={3} className="text-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={mentor.image}
                    alt=""
                  />
                </Col>

                {/* Profile Info */}
                <Col lg={9}>
                  <h6 style={{ margin: 0, fontWeight: 600, fontSize: "1rem" }}>
                    {mentor.name}
                  </h6>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "#6c757d", // Light gray text
                    }}
                  >
                    {mentor.subject}
                  </p>
                </Col>
              </Row>

              {/* Optional Divider */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MentorScreen;
