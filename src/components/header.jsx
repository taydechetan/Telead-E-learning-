import React, { useState } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import PromoCard from "./promocard";
// import Card from "components/card";
import Card from "./card";
import Mentors from "./mentors";
import Categorysection from "./categorysection";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav
        style={{ zIndex: 1030 }}
        className="navbar navbar-expand-lg position-fixed w-100 top-0  navbar-light bg-light"
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
          {/* <input type="text" placeholder="Search" /> */}
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
                <Link to="/" className="nav-link" href="#categories">
                  Home & categories
                </Link>
              </li>

              {/* <input
                type="text"
                placeholder="  Search"
                className="form-control custom-input"
                style={{ width: "200px", borderRadius: "21px" }}
              /> */}
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  classes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contactus">
                  Contact Us
                </Link>
              </li>
              {/* <div style={{ display: "flex" }} className="button-container"> */}
              <li className="nav-item">
                {" "}
                <Link to="/login" className="nav-link" href="#about">
                  <Button className="rounded-pill">Login</Button>
                </Link>
              </li>

              {/* </div> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
