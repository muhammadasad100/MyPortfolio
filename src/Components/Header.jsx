import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";
import Home from "./Home";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MainHeader>
        <div className="continer">
          <nav>
            <figure>
              <img src="/Images/asadlogo1.jpg" alt="" className="logo" />
            </figure>
            <div
              className="menu-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CgClose /> : <CgMenu />}
            </div>

            <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
              <li>
                <NavLink to="home " onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="link-active"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </MainHeader>
    </>
  );
};
const MainHeader = styled.header`
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }

  .logo {
    color: white;
    width: 30px;
  }
  .menu-icon {
    display: none;
    font-size: 2rem;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    list-style: none;
  }
  .active {
    border-bottom: 1px solid red;
  }

  .nav-links li {
    margin-right: 10px;
  }

  .nav-links a {
    color: #fff;
    text-decoration: none;
  }
  .nav-links.active {
    /* Added styles for active nav-links */
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #333;
    z-index: 10;
  }
  @media screen and (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 70px;
      left: 0;
      background-color: #333;
      padding: 1rem 0;
      z-index: 10;
    }

    .nav-links.active {
      display: flex;
    }

    .link-active {
      border-bottom: 1px solid red;
    }
    .nav-links li {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .nav-links a {
      padding: 0.5rem 1rem;
    }
  }
`;

export default Header;
