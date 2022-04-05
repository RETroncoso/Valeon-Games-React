import React from "react";
import {
  CheckoutContainer,
  ProductsContainer,
  ProductsUl,
  ProductsGrid,
  ProductImg,
  ProductInfo,
  ProductPrice,
  CostResume,
  CostLi,
  BtnContainer,
  CheckoutBtn,
} from "./CheckoutElements";

const CheckoutResume = () => {
  return (
    <CheckoutContainer>
      <h2>Tu pedido:</h2>
      <ProductsContainer>
        <h3>Productos:</h3>
        <ProductsUl>
          <ProductsGrid>
            <ProductImg>Imagen</ProductImg>
            <ProductInfo>Nombre</ProductInfo>
            <ProductPrice>Precio</ProductPrice>
          </ProductsGrid>
        </ProductsUl>
      </ProductsContainer>
      <CostResume>
        <h3>Costos:</h3>
        <ProductsUl>
          <CostLi>
            <p>Costo de los productos</p> <span>$300</span>
          </CostLi>
          <CostLi>
            <p>Costo de envío</p> <span>$300</span>
          </CostLi>
          <CostLi>
            <p>Total</p> <span>$300</span>
          </CostLi>
        </ProductsUl>
      </CostResume>
      <BtnContainer>
        <CheckoutBtn>VOLVER</CheckoutBtn>
        <CheckoutBtn>PAGAR</CheckoutBtn>
      </BtnContainer>
    </CheckoutContainer>
  );
};

export default CheckoutResume;
