import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as productsActions from "../../Redux/products/products-actions";
import { FaSearch } from "react-icons/fa";

const StyledInput = styled.input`
  width: 60%;
  font-size: 1.25rem;
  border: 2px solid #6e7198;
  border-radius: 12px;
  color: white;
  background-color: #121212;
  padding: 5px 5px 5px 55px;
  position: relative;
  ::placeholder {
    color: white;
  }
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    margin: 0;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding-left: 40px;
`;

export const CustomInput = (props) => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    console.log(e.target.value);
    dispatch(productsActions.searchItem(e.target.value));
  };

  return (
    <SearchSection>
      <h3>Los más destacados</h3>
      <SearchBar>
        <p>¿Qué andás buscando?</p>
        <FaSearch
          style={{
            color: "#717171",
            fontSize: "1rem",
            zIndex: "2",
            position: "relative",
            left: "25px",
            top: "27px",
          }}
        />
        <StyledInput
          onChange={searchHandler}
          placeholder={props.placeholder}
          style={{
            paddingLeft: props.paddingLeft,
            width: props.width,
          }}
        />
      </SearchBar>
    </SearchSection>
  );
};
