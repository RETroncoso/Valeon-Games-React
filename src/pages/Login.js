import React from "react";
import styled from "styled-components";
import {
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
} from "../Components/Login/LoginForm";
import { LogoContainer } from "../Components/Login/LoginLogo";
import LogoImg from "../img/logo.jpg";

const LoginContainer = styled.div`
  max-width: 75vw;
  margin-top: 11vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252525;
  box-shadow: 0 0 7px 6px black;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LogoContainer>
        <img alt="" src={LogoImg} />
      </LogoContainer>
      <FormContainer>
        <FormInput placeholder="Nombre" />
        <FormInput placeholder="Apellido" />
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Contraseña" />
        <FormInput type="password" placeholder="Repita su contraseña" />
      </FormContainer>
      <FormButton>Registrarse</FormButton>
      <FormLabel>Ya tenes cuenta? Ingresa haciendo click acá</FormLabel>
    </LoginContainer>
  );
};

export default Login;
