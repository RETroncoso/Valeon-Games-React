import styled from "styled-components";

export const CartContent = styled.div`
  overflow: auto;
  min-height: 100px;
  height: 100%;
  padding: 20px;
  height: 100%;
`;

export const CartContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #a509e2;
`;
export const CartItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 20% 40% 40%;
  justify-content: space-between;
`;

export const ProductImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
