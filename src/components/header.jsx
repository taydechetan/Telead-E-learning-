// import React, { useState } from "react";
// import "./header.css";
// import { FaSearch } from "react-icons/fa";
// import { IoCloseOutline } from "react-icons/io5";
// import PromoCard from "./promocard";
// // import Card from "components/card";
// import Card from "./card";
// import Mentors from "./mentors";
// import Categorysection from "./categorysection";
// import { Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { FiShoppingCart } from "react-icons/fi";
// import { useCart } from "./cartcontext";

// const Header = () => {
//   const navigate = useNavigate();
//   const { cart } = useCart();
//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const toggleSearchBar = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   return (
//     <>
//       <nav
//         style={{ zIndex: 1030 }}
//         className="navbar navbar-expand-lg position-fixed w-100 top-0  navbar-light bg-light"
//       >
//         <div className="container">
//           <FaSearch className="search-icon" onClick={toggleSearchBar} />
//           {isSearchOpen && (
//             <div className="search-bar">
//               <input type="search" placeholder="Search..." />
//             </div>
//           )}

//           {isSearchOpen && (
//             <p className="close-search" onClick={toggleSearchBar}>
//               {/* <IoCloseOutline /> */}
//             </p>
//           )}

//           {!isSearchOpen && (
//             <Link
//               to="/"
//               className="navbar-brand d-flex align-items-center"
//               href="#"
//               style={{ fontWeight: "bold" }}
//             >
//               <img
//                 src="https://dm-localsites-assets-prod.imgix.net/images/getapp/og_logo-94fd2a03a6c7a0e54fc0c9e21a1c0ce9.png"
//                 alt="Logo"
//                 style={{ height: "30px", marginRight: "10px" }}
//               />
//               Telead E-learning
//             </Link>
//           )}
//           {/* <input type="text" placeholder="Search" /> */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link" href="#categories">
//                   Home & categories
//                 </Link>
//               </li>

//               {/* <input
//                 type="text"
//                 placeholder="  Search"
//                 className="form-control custom-input"
//                 style={{ width: "200px", borderRadius: "21px" }}
//               /> */}
//               <li className="nav-item">
//                 <a className="nav-link" href="#blog">
//                   classes
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">
//                   About Us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Contactus">
//                   Contact Us
//                 </Link>
//               </li>
//               {/* <div style={{ display: "flex" }} className="button-container"> */}
//               <li className="nav-item">
//                 {" "}
//                 <Link to="/login" className="nav-link" href="#about">
//                   <Button className="rounded-pill">Login</Button>
//                 </Link>
//               </li>

//               <li
//                 className="navitemscar mt-3"
//                 onClick={() => navigate("/cart")}
//                 style={{ cursor: "pointer" }}
//               >
//                 <FiShoppingCart style={{ fontSize: "20px" }} />
//                 <span
//                   className="cartshoppingicon"
//                   style={{
//                     marginLeft: "10px",
//                     padding: "10px 10px",
//                     backgroundColor: "#52b9a6",
//                     borderRadius: "50%",
//                     color: "white",

//                     marginTop: "-32px",
//                   }}
//                 >
//                   {totalQuantity}
//                 </span>
//               </li>

//               {/* </div> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "./cartcontext";
import { FaChevronDown } from "react-icons/fa6";

import Modal from "react-bootstrap/Modal";
import { getUserdata, Logout, setUserData } from "../helper/storage";

const Header = () => {
  const navigate = useNavigate();
  const { removeFromCart } = useCart();
  const { cart } = useCart();
  const [user, setUser] = useState(null);
  const [name, setname] = useState("");
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showCartModal, setShowCartModal] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const validateToken = (token) => {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp > Date.now() / 1000;
  };
  const checkUserLoginStatus = async () => {
    const token = localStorage.getItem("@userToken");
    if (token && validateToken(token)) {
      const userData = await getUserdata();
      if (userData) {
        setIsLoggedIn(true);
        setUser(userData.Student);
      }
    } else {
      handleLogout();
    }
  };

  const handleLogout = async () => {
    await Logout();
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  const handleLogin = async () => {
    const token = localStorage.getItem("@userToken");
    if (token && validateToken(token)) {
      setIsLoggedIn(true);
      const userData = await getUserdata();
      setUser(userData.Student);
      navigate("/");
    }
  };

  const closeNavbarToggle = () => {
    const navbarToggle = document.getElementById("navbarNav");
    const toggleButton = document.querySelector(".navbar-toggler");
    if (
      navbarToggle &&
      toggleButton &&
      navbarToggle.classList.contains("show")
    ) {
      toggleButton.click();
    }
  };

  // const userData = window.localStorage.getItem("@userData");

  // if (userData) {
  //   const parsedData = JSON.parse(userData);
  //   console.log("dataaa", parsedData.name);
  // } else {
  //   console.log("No user data found.");
  // }

  useEffect(() => {
    checkUserLoginStatus();

    const userData = window.localStorage.getItem("@userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setname(parsedData.name);
    }
  }, []);

  return (
    <>
      <nav
        style={{ zIndex: 1030 }}
        className="navbar navbar-expand-lg position-fixed w-100 top-0  navbar-light"
      >
        <div className="container">
          <FaSearch className="search-icon" onClick={toggleSearchBar} />
          {isSearchOpen && (
            <div className="search-bar">
              <input type="search" placeholder="Search..." />
            </div>
          )}

          {isSearchOpen && (
            <p className="close-search" onClick={toggleSearchBar}>
              {/* <IoCloseOutline /> */}
            </p>
          )}

          {!isSearchOpen && (
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center"
              href="#"
              style={{ fontWeight: "bold" }}
            >
              <img
                src="https://dm-localsites-assets-prod.imgix.net/images/getapp/og_logo-94fd2a03a6c7a0e54fc0c9e21a1c0ce9.png"
                alt="Logo"
                style={{ height: "30px", marginRight: "10px" }}
              />
              Telead E-learning
            </Link>
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeNavbarToggle}>
                  Home & categories
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#blog"
                  onClick={closeNavbarToggle}
                >
                  classes
                </a>
              </li>

              <li>
                <Link
                  to="/Contactus"
                  className="nav-link"
                  onClick={closeNavbarToggle}
                >
                  <a> Contact-us</a>
                </Link>
              </li>

              {isLoggedIn ? (
                <li>
                  <Link to="/" className="nav-link" onClick={handleLogout}>
                    <Button className="rounded-pill">Logout</Button>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={closeNavbarToggle}
                  >
                    <Button className="rounded-pill">Login</Button>
                  </Link>
                </li>
              )}

              <li
                className="navitemscar"
                onClick={toggleCartModal}
                style={{ cursor: "pointer" }}
              >
                <FiShoppingCart style={{ fontSize: "20px" }} />
                <span
                  className="cartshoppingicon"
                  style={{
                    marginLeft: "10px",
                    padding: "10px 10px",
                    backgroundColor: "#52b9a6",
                    borderRadius: "50%",
                    color: "white",
                    marginTop: "-32px",
                  }}
                >
                  {totalQuantity}
                </span>
              </li>

              <li className="nav-itemms p-1 mt-1">
                <Link to="/studentprofile" className="no-decoration d-flex">
                  <h5>{name ? name : "Guest"}</h5>
                  <FaChevronDown className="mt-1 ms-1"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal
        show={showCartModal}
        onHide={() => setShowCartModal(false)}
        size="lg"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-modal-item">
                <div className="cart-modal-item-header d-flex justify-content-between align-items-center">
                  <h5 className="cart-modal-item-title  text-uppercase">
                    {item.title || "No Title"}
                  </h5>
                  <a
                    className="cart-modal-remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </a>
                </div>
                <div className="cart-modal-item-details">
                  {/* <p className="cart-modal-item-quantity">
                    Qty: {item.quantity}
                  </p> */}
                  <p className="cart-modal-item-price">{item.price}</p>
                </div>
              </div>
            ))
          )}

          <div className="cart-modal-checkout-container d-grid gap-2 col-6 w-100 mt-3">
            <button
              className="cart-modal-checkout-btn"
              onClick={() => {
                setShowCartModal(false);
                if (isLoggedIn) {
                  navigate("/cart");
                } else {
                  navigate("/login");
                }
              }}
            >
              Checkout
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
