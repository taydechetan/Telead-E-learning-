// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useCart } from "../../components/cartcontext";
// import { Button, Container, Row, Col, Card } from "react-bootstrap";
// import imptyimg from "../../assets/image/empty-cart.png";
// import Serchpng from "../../assets/image/serchhh.png";
// import "./cart.css";

// const Cart = () => {
//   const location = useLocation();
//   const selectedCourse = location.state?.selectedCourse;
//   const { cart, removeFromCart, clearCart } = useCart();
//   const navigate = useNavigate();

//   if (cart.length === 0 && !selectedCourse) {
//     return (
//       <div className="empty-carttr mb-5">
//         <h2 className="mt-3">Your cart is empty!</h2>
//         <img src={imptyimg} alt="img" className="imptyimages" />
//         <Button className="gobuttonns mt-3 mb-4" onClick={() => navigate("/")}>
//           Go Back to Shop
//         </Button>
//       </div>
//     );
//   }

//   const handleCheckout = () => {
//     navigate("/checkout");
//   };

//   const backbuttonbac = () => {
//     navigate(-1);
//   };

//   return (
//     <Container style={{ marginTop: "120px" }}>
//       <p className="backbbutton" onClick={backbuttonbac}>
//         <img src={Serchpng} alt="img" />
//         <h2 className="ms-3 mt-2">Shopping Cart</h2>
//       </p>
//       <Row className="gy-3">
//         {cart.map((item) => (
//           <Col xs={12} md={6} lg={4} key={item.id}>
//             <Card className="cart-item shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={item.image}
//                 alt={item.title}
//                 className="cart-item-image"
//               />
//               <Card.Body>
//                 <Card.Title>{item.name}</Card.Title>
//                 <Card.Text>
//                   <strong>Price:</strong> {item.price}
//                 </Card.Text>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   className="remove-btn"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </Button>
//               </Card.Body>
//               <Card.Footer className="cart-item-footer">
//                 <h5>Total: {item.price}</h5>
//                 <Button variant="success" size="sm" onClick={handleCheckout}>
//                   Checkout
//                 </Button>
//               </Card.Footer>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <div className="text-center mt-4 mb-5">
//         <Button variant="warning" onClick={clearCart}>
//           Clear Cart
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default Cart;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../components/cartcontext";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import imptyimg from "../../assets/image/empty-cart.png";
import Serchpng from "../../assets/image/serchhh.png";
import "./cart.css";

const Cart = () => {
  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse;
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0 && !selectedCourse) {
    return (
      <div className="empty-carttr mb-5">
        <h2 className="mt-3">Your cart is empty!</h2>
        <img src={imptyimg} alt="img" className="imptyimages" />
        <Button className="gobuttonns mt-3 mb-4" onClick={() => navigate("/")}>
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

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <Container style={{ marginTop: "120px" }}>
      <p className="backbbutton" onClick={backbuttonbac}>
        <img src={Serchpng} alt="img" />
        <h2 className="ms-3 mt-2">Shopping Cart</h2>
      </p>

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
            </Card>
          </Col>
        ))}
      </Row>

      <Row
        className="text-center mt-4 mb-5 d-flex"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Col>
          <h3 className="text-center">
            <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
          </h3>
        </Col>

        <Col>
          <Button
            variant="success"
            size="sm"
            onClick={handleCheckout}
            style={{ width: "100px" }}
            className="mb-3 checkouttbn"
          >
            Checkout
          </Button>
        </Col>

        <Col>
          <Button
            variant="warning"
            onClick={clearCart}
            style={{ width: "30%" }}
          >
            Clear Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
