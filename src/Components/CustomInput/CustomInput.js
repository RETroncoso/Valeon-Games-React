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

const SearchDiv = styled.div`
  display: flex;
  width: 100%;
`;

const BtnDiv = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 20px;
  width: 50%;
  justify-content: space-around;
`;

const FilterBtn = styled.button`
  border: none;
  color: white;
  background-color: #6e7198;
  border-radius: 10px;
  font-weight: bolder;
  font-size: 0.9rem;
  width: 125px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 0px 5px 1px white;
  }
`;

export const CustomInput = (props) => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(productsActions.searchItem(e.target.value));
  };

  const filterHandler = ({ target }) => {
    dispatch(productsActions.filterItem(target.innerText));
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
        <SearchDiv>
          <StyledInput
            onChange={searchHandler}
            placeholder={props.placeholder}
            style={{
              paddingLeft: props.paddingLeft,
              width: props.width,
            }}
          />
          <BtnDiv>
            <FilterBtn onClick={filterHandler}>MOUSE</FilterBtn>
            <FilterBtn onClick={filterHandler}>TECLADO</FilterBtn>
            <FilterBtn onClick={filterHandler}>AURICULARES</FilterBtn>
          </BtnDiv>
        </SearchDiv>
      </SearchBar>
    </SearchSection>
  );
};
