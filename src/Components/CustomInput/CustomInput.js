import React from "react";
import styled from "styled-components";

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
  return (
    <StyledInput
      placeholder={props.placeholder}
      style={{
        paddingLeft: props.paddingLeft,
        width: props.width,
      }}
    />
  );
};
