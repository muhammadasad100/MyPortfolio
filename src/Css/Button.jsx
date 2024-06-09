import React from "react";
import styled from "styled-components";

// Define the Button styled component
export const Button = styled.button`
  /* Default styles */

  width: auto;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  background-color: rgb(30, 144, 255);

  cursor: pointer;
  margin-bottom: 1rem;

  /* Custom styles for different states */

  &:hover {
    color: black;
  }

  &:active {
    color: black;
    background-color: wheat;
  }

  /* Additional custom styles */
  /* Add your own custom styles here */
`;

// Usage of the Button component
