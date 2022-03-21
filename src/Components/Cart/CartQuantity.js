import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as cartActions from "../../Redux/cart/cart-actions";

const ManagerContainer = styled.div`
  font-family: "Montserrat", cursive;
  font-weight: 700;
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  height: 32px;
  padding: 10px;
  box-shadow: 0px 0px 20px 7px rgba(235, 83, 202, 0.16);
`;

const QuantityStyled = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

const QuantityButton = styled.div`
  width: 23px;
  color: violet;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
`;

const DeleteIconStyled = styled.div`
  width: 17px;
  height: 17px;
  cursor: pointer;
  margin: 0 10px;
  color: violet;
`;

export const CartQuantity = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <ManagerContainer>
      {product.quantity === 1 ? (
        <DeleteIconStyled
          onClick={() => dispatch(cartActions.removeItem(product))}
        >
          <FaTrash />
        </DeleteIconStyled>
      ) : (
        <QuantityButton
          onClick={() => dispatch(cartActions.removeItem(product))}
        >
          -
        </QuantityButton>
      )}
      <QuantityStyled>{product.quantity}</QuantityStyled>

      <QuantityButton onClick={() => dispatch(cartActions.addItem(product))}>
        +
      </QuantityButton>
    </ManagerContainer>
  );
};
