import React from "react";
import styled from "styled-components";
import logoFooter from "../../img/logo.jpg";

const StyledFooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
`;

const StyledLogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 75%;
    border-radius: 50%;
  }
  p {
    margin-bottom: 10px;
    font-size: 0.75rem;
  }
`;

export const FooterLogo = () => {
  return (
    <StyledFooterLogo>
      <StyledLogoContainer>
        <img src={logoFooter} />
        <p>&copy; 2022 Rodrigo Troncoso for NUCBA</p>
      </StyledLogoContainer>
    </StyledFooterLogo>
  );
};
