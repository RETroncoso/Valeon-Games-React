import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../Redux/cart/cart-actions";

const StyledCard = styled.div`
  border: violet 1px solid;
  border-radius: 10px;
  background-color: #252525;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 400px;
  height: 635px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #323232;
    border: violet 1px;
    box-shadow: #a3a3a3 0px 0px 18px 0px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIcon = styled.div`
  margin-top: 15px;
  color: violet;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    color: #742fb9;
  }
`;

export const Card = ({ producto, openedProduct, setOpenedProduct }) => {
  const itemsEnCarrito = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const agregarItem = () => {
    dispatch(cartActions.addItem(producto));
    console.log(itemsEnCarrito);
  };

  return (
    <StyledCard>
      <StyledTitle>{producto.nombre}</StyledTitle>
      <StyledImg src={producto.foto} />
      <StyledPrice>
        {formatPrice(producto.precio)}
        <StyledIcon onClick={() => setOpenedProduct(producto)}>
          <MdOutlineAddShoppingCart onClick={agregarItem} />
        </StyledIcon>
      </StyledPrice>
    </StyledCard>
  );
};
