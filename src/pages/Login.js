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
import { useState } from "react";

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
  const [isLoginMode, setIsLoginMode] = useState(true);
  const changeModeHandler = () => {
    return setIsLoginMode(!isLoginMode);
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <img alt="" src={LogoImg} />
      </LogoContainer>
      <FormContainer>
        {!isLoginMode && <FormInput placeholder="Nombre" />}
        {!isLoginMode && <FormInput placeholder="Apellido" />}
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Contraseña" />
        {!isLoginMode && (
          <FormInput type="password" placeholder="Repita su contraseña" />
        )}
      </FormContainer>
      <FormButton>{isLoginMode ? "Ingresar" : "Registrarse"}</FormButton>
      <FormLabel onClick={changeModeHandler}>
        {isLoginMode
          ? "Aún no tenés cuenta? Creala acá!"
          : "Ya tenes cuenta? Ingresa haciendo click acá"}
      </FormLabel>
    </LoginContainer>
  );
};

export default Login;
