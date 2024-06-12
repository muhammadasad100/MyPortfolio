import React from "react";
import { styled } from "styled-components";
import { useglobalcontext } from "../../context/contextdata";

const Portfolio = () => {
  const { portfolio } = useglobalcontext();

  console.log(portfolio);
  const Wrapper = styled.section`
    /* .imagesec {
      width: 500px;
      height: 500px;
    } */
    .image {
      width: 300px;
      height: 200px;
      transition: transform 0.2s, box-shadow 0.2s;
      // object-fit: fill;
    }
    .image:hover {
      background-color: #333;
      transform: scale(1.05); /* Increase the card size a bit on hover */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      flex-wrap: wrap;
      column-gap: 0rem;
      row-gap: 1rem;
      padding: 0 3rem;
    }
    h1 {
      margin: 1rem;
    }
    @media screen and (max-width: 768px) {
      .grid {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        column-gap: 0rem;
        row-gap: 2rem;
        padding: 0 0rem;
      }
      .box {
        padding: 0 2rem;
        margin: auto;
      }
      .image {
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <div className="container  box">
          <h1 className="color">My Projects</h1>
          <div className="imagesec grid">
            {portfolio.map((item) => {
              return <img src={item.image} alt="" className="image" />;
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Portfolio;
