import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { useOpenProduct } from "../../Hooks/useOpenProduct";

const StyledProd = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  max-width: 95%;
  justify-content: center;
`;

export const ProductsContainer = () => {
  let Productos = useSelector((state) => state.products.productos);

  const openProduct = useOpenProduct();

  return (
    <StyledProd>
      {Object.entries(Productos).map(([productos]) => {
        return Productos[productos].map((producto) => {
          return (
            <Card {...openProduct} key={producto.id} producto={producto} />
          );
        });
      })}
    </StyledProd>
  );
};
