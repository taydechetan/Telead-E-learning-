import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./promocard.css";

const PromoCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Dynamic data for promo cards
  const promoData = [
    {
      id: 1,
      title: "25% OFF*",
      subtitle: "Today's Special",
      description:
        "Get a Discount for Every Course Order\nOnly Valid for Today!",
    },
    {
      id: 2,
      title: "50% OFF*",
      subtitle: "Exclusive Offer",
      description: "Unlock premium courses at half the price!",
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free*",
      subtitle: "Weekend Special",
      description: "Enroll in one course and get another absolutely free!",
    },
  ];

  return (
    <Container fluid className="promo-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        className="promo-carousel"
      >
        {promoData.map((promo, i) => (
          <Carousel.Item key={promo.id}>
            <div className="promo-card d-flex align-items-center">
              <div className="promo-text">
                <h4>{promo.title}</h4>
                <h2>{promo.subtitle}</h2>
                <p>
                  {promo.description.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="promo-image">
                {promo.image && <img src={promo.image} alt={promo.subtitle} />}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="promo-dots">
        {promoData.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`promo-dot ${index === dotIndex ? "active" : ""}`}
            onClick={() => handleSelect(dotIndex)}
          ></span>
        ))}
      </div>
    </Container>
  );
};

export default PromoCarousel;
