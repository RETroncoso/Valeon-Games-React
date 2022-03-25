import React from "react";
import styled from "styled-components";

const StyledLinks = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  align-items: center;
  width: 33%;
  margin-top: 0;
  li {
    margin: 5px 0px;
  }
`;

export const FooterLinks = () => {
  return (
    <StyledLinks>
      <li>
        <a href="#">Nosotros</a>
      </li>
      <li>
        <a href="#">Productos</a>
      </li>
    </StyledLinks>
  );
};
