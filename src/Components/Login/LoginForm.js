import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  box-shadow: 0 0 7px 3px black;
  border: none;
  border-radius: 15px;
  background-color: #a509e2;
  font-size: 1.1rem;
  padding-left: 10px;
  margin: 10px 25px;
`;

export const FormButton = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  width: 60%;
  border: none;
  border-radius: 15px;
  font-size: 1.2rem;
  background-color: #67068d;
  color: white;
  box-shadow: #c35bec 1px 1px 8px 4px;
  :hover {
    cursor: pointer;
    box-shadow: #fafafa 1px 1px 8px 4px;
  }
`;

export const FormLabel = styled.p`
  font-size: 0.75rem;
  padding: 0 25px;
  cursor: pointer;
`;
