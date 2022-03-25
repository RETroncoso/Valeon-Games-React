import React from "react";
import styled from "styled-components";
import NosotrosImg from "../../img/nosotros.png";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 11vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${NosotrosImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 50px;
  p {
    font-size: 1.5rem;
    margin: 10px;
    margin-bottom: 25px;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <h2 style={{ fontSize: "4rem" }}>Somos Valeon Games!</h2>
      <p>Una tienda creada POR gamers, PARA gamers</p>
      <p>
        Conocemos la GRAN diferencia que hace un periferico de calidad a la hora
        de jugar y por eso nuestra meta es ofrecer la mejor calidad al menor
        precio posible.
      </p>
    </StyledHero>
  );
};

export default Hero;
