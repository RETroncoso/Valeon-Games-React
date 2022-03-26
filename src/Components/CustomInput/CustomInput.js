import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as productsActions from "../../Redux/products/products-actions";

const StyledInput = styled.input`
  border: none;
  border-radius: 15px;
  background-color: #a509e2;
  font-size: 1.5rem;
  padding: 7px;
  color: white;
  ::placeholder {
    color: white;
  }
`;

export const CustomInput = (props) => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    console.log(e.target.value);
    dispatch(productsActions.searchItem(e.target.value));
  };

  return (
    <StyledInput
      onChange={searchHandler}
      placeholder={props.placeholder}
      style={{
        paddingLeft: props.paddingLeft,
        width: props.width,
      }}
    />
  );
};
