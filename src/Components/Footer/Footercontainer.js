import React from "react";
import styled from "styled-components";
import { FooterLinks } from "./FooterLinks";
import { FooterLogo } from "./FooterLogo";
import { FooterRedes } from "./FooterRedes";

const StyledFooterContainer = styled.footer`
  display: flex;
  margin-top: 25px;
  margin-bottom: 15px;
  border-top: violet 1px solid;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Footercontainer = () => {
  return (
    <StyledFooterContainer>
      <FooterLinks />
      <FooterLogo />
      <FooterRedes />
    </StyledFooterContainer>
  );
};
