import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CartContainer, CartContent, CartItem } from "./CartElements";

const StyledCart = styled.div`
  position: fixed;
  right: 0px;
  top: 11vh;
  width: 340px;
  background-color: #252525;
  height: calc(100% - 11vh);
  z-index: 10;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
  transition-property: transform;
  transition-duration: 0.5s;
  z-index: 5;
`;

export const Cart = () => {
  let mostrar = useSelector((state) => state.cart.show);

  return (
    <StyledCart show={mostrar}>
      <CartContent>
        <CartContainer>
          <CartItem>
            <div style={{ width: "20%" }}>Imagen</div>
            <div style={{ width: "40%" }}>Producto</div>
            <div style={{ width: "40%" }}>Manejar cantidad</div>
          </CartItem>
        </CartContainer>
      </CartContent>
    </StyledCart>
  );
};
