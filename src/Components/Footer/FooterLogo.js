import React from "react";
import styled from "styled-components";
import logoFooter from "../../img/logo.jpg";

const StyledLogoContainer = styled.div`
  display: flex;
  width: 33%;
  align-items: center;
  justify-content: flex-start;
  img {
    padding-left: 25px;
    height: 2vh;
  }
`;

export const FooterLogo = () => {
  return (
    <StyledLogoContainer>
      <img src={logoFooter} alt="Logo de Valeon Games" />
    </StyledLogoContainer>
  );
};
