import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./learningsection.css";
import { getUserdata, Logout, setUserData } from "../helper/storage";

const Learningsection = () => {
  // Store data in a variable
  const data = {
    title: "Start Learning with Teach and achieve your goals",
    description:
      "By joining Teach as a passionate student, you'll unlock a treasure trove of benefits. Gain profound insights and knowledge from expert instructors. Build meaningful relationships within our vibrant global community. Earn coveted international certificates, and experience the joy of seamless, flexible learning. Embrace excellence with Teach, your gateway to a world of opportunities!",
    image:
      "https://images.squarespace-cdn.com/content/v1/65ac75c581e4121ea1053fda/1d233221-6c36-4665-bdc1-3ec45df4e0b5/Start+Learning+Now+1.png",
    features: [
      {
        id: 1,
        icon: "🎓",
        title: "Expert mentors",
        description: "Mentorship from the world’s best college alumni",
      },
      {
        id: 2,
        icon: "🔒",
        title: "Lifetime Access",
        description: "Certificates that can be used to apply for work",
      },
      {
        id: 3,
        icon: "🌐",
        title: "Online & Offline",
        description: "Wide relationships and opportunities",
      },
    ],
  };

  const filteredFeatures = data.features.filter((feature) =>
    feature.title.includes("Access")
  );

  return (
    <Container fluid className="learning-section-container">
      <Row className="align-items-center">
        {/* Left Section */}
        <Col lg={6} className="learning-image-section">
          <h2 className="learning-title text-start">{data.title}</h2>

          <div className="image-wrapper mt-5">
            <img src={data.image} alt="Learning" className="learning-image" />
          </div>
        </Col>

        {/* Right Section */}
        <Col lg={6} className="learning-content-section">
          <p className="learning-description">{data.description}</p>
          <div className="features-list">
            {data.features.map((feature) => (
              <Card className="feature-card" key={feature.id}>
                <Card.Body className="feature-body">
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <h5 className="feature-title">{feature.title}</h5>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Learningsection;
