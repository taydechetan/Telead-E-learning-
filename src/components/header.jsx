import React, { useState } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import PromoCard from "./promocard";
// import Card from "components/card";
import Card from "./card";
import Mentors from "./mentors";
import Categorysection from "./categorysection";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <a
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
            </a>
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
                <a className="nav-link" href="#categories">
                  Home & categories
                </a>
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
                  About us
                </a>
              </li>
              <div style={{ display: "flex" }} className="button-container">
                <li className="nav-item">
                  <a
                    className="btn btn-primary"
                    style={{ borderRadius: "18px" }}
                    href="#signin"
                  >
                    Sign in
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <button
                    className="btn btn-outline-primary"
                    style={{ borderRadius: "18px" }}
                  >
                    login
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <PromoCard />
      <Categorysection />
      <Card />
      <Mentors />
    </>
  );
};

export default Header;
