import React, { useState } from "react";
import { useEffect } from "react";
//import Api from "../Components/Api";
import { styled } from "styled-components";
import { Button } from "../Css/Button";
import { useglobalcontext } from "../../context/contextdata";

const Services = () => {
  //  const{showdata}=useGlobalContex();
  //console.log(showdata);
  const { services } = useglobalcontext();
  console.log("services in section", services);
  return (
    <Wrapper>
      <div className="container">
        <h2 className="color">Our Services</h2>
        <div className="grid  box">
          {services.map((service) => (
            <div className="card" key={service.id}>
              <h3 className="title">{service.title}</h3>
              <p className="para">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .box {
    width: 100%;
    padding: 0rem 3rem;
  }
  h2 {
    text-align: center;
    margin: 1rem;
  }
  //grid grid-three-column container
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem; /* Horizontal and vertical gap */
    /* Vertical gap */
    text-align: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: auto;
    padding: 1rem;

    background-color: #93938b;
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    justify-content: space-around;
    transition: transform 0.2s, box-shadow 0.2s;
    /* grid-row: 1rem;
    grid-column: 0.6rem; */
  }
  .card:hover {
    background-color: #333;
    transform: scale(1.05); /* Increase the card size a bit on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .title {
    color: white;
  }
  .para {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    .box {
      width: 100%;
      padding: 0rem 0.5rem;
    }
    .grid {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    .card {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 400px;
      gap: 1rem;
      background-color: #333;
      transition: none;
    }
    .card:hover {
      background-color: #333;
      transform: none; /* Increase the card size a bit on hover */
      box-shadow: none;
    }
  }
`;
export default Services;
