import React from "react";
import styled from "styled-components";
import {
  FormButton,
  FormContainer,
  FormLabel,
} from "../Components/Login/LoginForm";
import { Input } from "../Components/Login/LoginInput";
import { LogoContainer } from "../Components/Login/LoginLogo";
import LogoImg from "../img/logo.jpg";
import { useState } from "react";
import useForm from "../Hooks/useForm";
import { useSelector } from "react-redux";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../utils/validator";
import { History } from "history";

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
  const currentUser = useSelector((state) => state.user.currentUser);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const changeModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          email: {
            value: "",
            isValid: false,
          },
          password: {
            value: "",
            isValid: false,
          },
        },
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          displayName: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <img alt="" src={LogoImg} />
      </LogoContainer>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormContainer>
          {!isLoginMode && (
            <Input
              id="displayName"
              label="Nombre"
              type="text"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
            />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
            errorText="Campo Obligatorio"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Campo Obligatorio"
          />

          <FormButton onClick={""}>
            {isLoginMode ? "Ingresar" : "Registrarse"}
          </FormButton>
          <FormLabel onClick={changeModeHandler}>
            {isLoginMode
              ? "Aún no tenés cuenta? Creala acá!"
              : "Ya tenes cuenta? Ingresa haciendo click acá"}
          </FormLabel>
        </FormContainer>
      </form>
    </LoginContainer>
  );
};

export default Login;
