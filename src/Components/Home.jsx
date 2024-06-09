import React from "react";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import styled from "styled-components";
import { useglobalcontext } from "../../context/contextdata";
import { NavLink } from "react-router-dom";
import Portfolio from "./Portfolio";

const Home = () => {
  //const { name } = useglobalcontext();
  const Wrapper = styled.section`
    .home-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      // background-image: url("background.jpg"); /* Add your background image */
      // background-size: cover;
      //background-position: center;
      color: #fff;
      text-align: center;
    }
    .rowno {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0rem;
      gap: 3rem;
      margin-bottom: 2rem;
    }
    .image {
      width: 400px;
    }
    .intro h1 {
      font-size: 1.5em;
    }

    .intro p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    .cta-button {
      padding: 0.75rem 0.5rem;
      font-size: 0.75rem;
      color: #fff;
      background-color: #333;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      border: 1px solid;
    }
    .cta-button:hover {
      background-color: #555;
    }
    @media screen and (max-width: 768px) {
      .rowno {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
      }
      .image {
        width: 350px;
      }
      .intro h1 {
        font-size: 2rem;
      }

      .intro p {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      span {
        margin-top: 1rem;
        font-size: 2rem;
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="rowno">
            <div className="intro">
              <h1>
                Hi, Myself <br /> <span className="color">Muhammad Asad</span>{" "}
              </h1>
              <p>
                And I'm a <br />{" "}
                <span className="color">Mern Stack Developer.</span>
              </p>
              <NavLink to="/about">
                <button className="cta-button">About me</button>
              </NavLink>
            </div>
            <div className="imagesec">
              <img src="/Images/home.jpg" alt="" className="image" />
            </div>
          </div>
        </div>
      </Wrapper>
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
