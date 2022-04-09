import React from "react";
import styled from "styled-components";
import NosotrosImg from "../../img/pc_hero.png";
import { Link } from "react-router-dom";

const StyledHero = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
`;

const HeroL = styled.div`
  padding-top: 20px;
  width: 60%;
  margin-left: 50px;
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 2.5rem;
  }
  h2 {
    font-size: 4rem;
    font-weight: 800;
    margin: 0;
  }
  p {
    font-size: 1.25rem;
  }
`;

const HeroBtn = styled.button`
  font-weight: 600;
  border-radius: 10px;
  margin-left: 15px;
  padding: 6px 10px;
  height: 40px;
  width: 150px;
  &:hover {
    cursor: pointer;
    box-shadow: rgb(38 38 38) 0px 0px 16px 5px;
  }
`;

const HeroR = styled.div`
  width: 50%;
  img {
    position: absolute;
    right: 0;
    height: 400px;
  }
`;

const Hero = () => {
  return (
    <StyledHero id="nosotros">
      <HeroL>
        <h3>Somos</h3>
        <h2>Valeon Games</h2>
        <p>Una tienda creada POR gamers, PARA gamers</p>
        <p>
          Conocemos la GRAN diferencia que hace un periferico de calidad a la
          hora de jugar y por eso nuestra meta es ofrecer la mejor calidad al
          menor precio posible.
        </p>
        <Link to="/#productos">
          <HeroBtn
            style={{
              backgroundColor: "#121212",
              color: "white",
              border: "29x solid #ffffff",
            }}
          >
            VER PRODUCTOS
          </HeroBtn>
        </Link>
        <HeroBtn style={{ border: "none" }}>CONSULTANOS</HeroBtn>
      </HeroL>
      <HeroR>
        <img src={NosotrosImg} alt="" />
      </HeroR>
    </StyledHero>
  );
};

export default Hero;
