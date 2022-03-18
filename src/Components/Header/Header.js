import React from "react";
import styled from "styled-components";
import LogoImg from "../../img/logo.jpg";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import * as cartActions from "../../Redux/cart/cart-actions";
import { useDispatch } from "react-redux";

const HeaderContainer = styled.header`
  background-color: #1f1f1f;
  width: 100vw;
  height: 11vh;
  display: flex;
  justify-content: space-between;
  z-index: 6;
  position: fixed;
  top: 0;
`;

const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: auto;
  margin-top: auto;
`;

const HeaderLi = styled.li`
  padding-left: 20px;
`;

const LogoContainer = styled.div`
  max-height: 100%;
`;

const Logo = styled.img`
  max-height: 100%;
  border-radius: 50%;
  padding: 5px;
`;

const HeaderRight = styled.ul`
  display: flex;
  margin-bottom: 0;
  margin-right: 25px;
  align-items: center;
  margin-top: 0;
`;

const RightLi = styled.li`
  padding-right: 30px;
  color: white;
`;

const Header = () => {
  const dispatch = useDispatch();

  const showMenu = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <HeaderContainer>
      <HeaderLinks>
        <HeaderLi>
          <a href="#nosotros">Nosotros</a>
        </HeaderLi>
        <HeaderLi>
          <a href="#productos">Productos</a>
        </HeaderLi>
      </HeaderLinks>
      <LogoContainer>
        <Logo src={LogoImg} />
      </LogoContainer>
      <HeaderRight>
        <RightLi>Hola, persona!</RightLi>
        <RightLi>
          <FaUser
            style={{ color: "#a509e2", fontSize: "1.5rem", cursor: "pointer" }}
          />
        </RightLi>
        <RightLi>
          <FaShoppingCart
            onClick={() => showMenu()}
            style={{ color: "#a509e2", fontSize: "1.5rem", cursor: "pointer" }}
          />
        </RightLi>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
