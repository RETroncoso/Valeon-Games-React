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

export const CartFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: auto;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  background-color: #a509e2;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
`;
