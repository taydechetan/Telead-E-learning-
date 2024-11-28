import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../components/cartcontext";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./cart.css";

const Cart = () => {
  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse;
  const { cart, removeFromCart, clearCart  } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0 && !selectedCourse) {
    return (
      <div className="empty-carttr mb-5">
        <h2>Your cart is empty!</h2>
        <Button className="gobuttonns mt-3" onClick={() => navigate("/")}>
          Go Back to Shop
        </Button>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const backbuttonbac = () => {
    navigate(-1);
  };

  return (
    <Container style={{ marginTop: "120px" }}>
      <p className="backbbutton mb-4" onClick={backbuttonbac}>
        <FaLongArrowAltLeft />
      </p>
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <Row className="gy-3">
        {cart.map((item) => (
          <Col xs={12} md={6} lg={4} key={item.id}>
            <Card className="cart-item shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {item.price}
                </Card.Text>

                <Button
                  variant="danger"
                  size="sm"
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Card.Body>
              <Card.Footer className="cart-item-footer">
                <h5>Total: {item.price}</h5>
                <Button variant="success" size="sm" onClick={handleCheckout}>
                  Checkout
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4 mb-5">
        <Button variant="warning" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
