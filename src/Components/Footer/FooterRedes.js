import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const StyledRedes = styled.ul`
  width: 33%;
  margin-right: 30px;
  display: flex;
  font-size: 1.75rem;
  align-items: center;
  li {
    padding: 0px 15px;
  }
  a {
    cursor: pointer;
  }
`;

export const FooterRedes = () => {
  return (
    <StyledRedes>
      <li>
        <a>
          <FaInstagram />
        </a>
      </li>
      <li>
        <a>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a>
          <FaTwitter />
        </a>
      </li>
    </StyledRedes>
  );
};
