import React from "react";
import styled from "styled-components";

const StyledLinks = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  align-items: center;
  li {
    margin: 5px 0px;
  }
`;

export const FooterLinks = () => {
  return (
    <StyledLinks>
      <li>
        <a href="#nosotros">Nosotros</a>
      </li>
      <li>
        <a href="#productos">Productos</a>
      </li>
    </StyledLinks>
  );
};
