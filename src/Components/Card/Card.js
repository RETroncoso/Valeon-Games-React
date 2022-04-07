import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import * as cartActions from "../../Redux/cart/cart-actions";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  border-radius: 24px;
  border: 2px solid #6e7198;
  margin: 10px;
  position: relative;
  width: 400px;
  height: 550px;
  justify-content: space-between;
`;

const CardSup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const CardInf = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 10px;
`;

const StyledTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0px 10px;
  padding-top: 15px;
`;
const StyledImg = styled.div`
  width: 100%;
  img {
    padding: 10px;
    border-radius: 20px;
    width: 95%;
  }
  h5 {
    font-size: 1.4rem;
    margin: 30px 0px;
  }
`;
const StyledPrice = styled.p`
  padding-left: 40px;
  font-size: 1.3rem;
  font-weight: 700;
`;

const StyledAdd = styled.button`
  border: none;
  font-weight: 800;
  background-color: #2de2a1;
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  width: 110px;
  height: 45px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #1e996c;
    box-shadow: 0px 0px 5px 1px white;
  }
`;

export const Card = ({ producto }) => {
  const dispatch = useDispatch();

  const agregarItem = () => {
    dispatch(cartActions.addItem(producto));
    dispatch(cartActions.holaModal());
    setTimeout(() => {
      dispatch(cartActions.chauModal());
    }, 2000);
  };

  return (
    <StyledCard>
      <CardSup>
        <StyledImg>
          <img src={producto.foto} alt="Imagen del prosucto" />
        </StyledImg>
        <StyledTitle>{producto.nombre}</StyledTitle>
      </CardSup>
      <CardInf>
        <StyledPrice>{formatPrice(producto.precio)}</StyledPrice>
        <StyledAdd onClick={agregarItem}>AGREGAR</StyledAdd>
      </CardInf>
    </StyledCard>
  );
};
