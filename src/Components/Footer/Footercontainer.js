import React from "react";
import styled from "styled-components";
import { FooterM } from "./FooterM";
import { FooterLogo } from "./FooterLogo";
import { FooterRedes } from "./FooterRedes";

const StyledFooterContainer = styled.footer`
  background: linear-gradient(180deg, #151515 0%, #1f1f1f 97.92%);
  display: flex;
  margin-top: 25px;
  width: 100%;
  height: 6vh;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  margin-bottom: 0;
  position: relative;
  bottom: 0;
`;

export const Footercontainer = () => {
  return (
    <StyledFooterContainer>
      <FooterLogo />
      <FooterM />
      <FooterRedes />
    </StyledFooterContainer>
  );
};
