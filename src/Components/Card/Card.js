import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";

const StyledCard = styled.div`
  border: violet 1px solid;
  border-radius: 10px;
  background-color: #252525;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    border: violet 1px dashed;
    box-shadow: #a3a3a3 0px 0px 13px 0px;
  }
`;

const StyledTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0px 10px;
  padding-top: 15px;
`;
const StyledImg = styled.img`
  max-width: 300px;
  max-height: 400px; ;
`;
const StyledPrice = styled.p`
  font-size: 1.5rem;
  padding-bottom: 10px;
`;

export const Card = ({ producto, openedProduct, setOpenedProduct }) => {
  return (
    <StyledCard onClick={() => setOpenedProduct(producto)}>
      <StyledTitle>{producto.nombre}</StyledTitle>
      <StyledImg src={producto.foto} />
      <StyledPrice>{formatPrice(producto.precio)}</StyledPrice>
    </StyledCard>
  );
};