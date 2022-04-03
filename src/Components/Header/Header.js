import React from "react";
import styled from "styled-components";
import LogoImg from "../../img/logo.jpg";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import * as cartActions from "../../Redux/cart/cart-actions";
import * as userActions from "../../Redux/user/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #1f1f1f;
  width: 100vw;
  height: 11vh;
  display: flex;
  justify-content: space-between;
  z-index: 6;
  position: sticky;
  top: 0;
`;

const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: auto;
  margin-top: auto;
`;

const HeaderLi = styled.li`
  padding-left: 20px;
`;

const LogoContainer = styled.div`
  max-height: 100%;
`;

const Logo = styled.img`
  max-height: 100%;
  border-radius: 50%;
  padding: 5px;
`;

const HeaderRight = styled.ul`
  display: flex;
  margin-bottom: 0;
  margin-right: 25px;
  align-items: center;
  margin-top: 0;
`;

const RightLi = styled.li`
  padding-right: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const sesionBtn = styled.p`
  margin-left: 2px;
  font-size: 0.1rem;
`;

const Header = () => {
  const dispatch = useDispatch();

  const showMenu = () => {
    dispatch(cartActions.toggleCart());
  };

  const nombreUser = useSelector(
    (state) => state.user.currentUser?.displayName?.value
  );
  const cerrarSesion = () => {
    dispatch(userActions.setCurrentUser({}));
  };
  return (
    <HeaderContainer>
      <HeaderLinks>
        <HeaderLi>
          <a href="#nosotros">Nosotros</a>
        </HeaderLi>
        <HeaderLi>
          <a href="#productos">Productos</a>
        </HeaderLi>
      </HeaderLinks>

      <LogoContainer>
        <Link to="/">
          <Logo src={LogoImg} />
        </Link>
      </LogoContainer>
      <HeaderRight>
        <RightLi>
          {nombreUser ? (
            <>
              Hola, {nombreUser}!
              <sesionBtn
                onClick={cerrarSesion}
                style={{
                  color: "#a509e2",
                  fontSize: "0.7rem",
                  cursor: "pointer",
                  marginTop: "3px",
                }}
              >
                Cerrar sesión
              </sesionBtn>
            </>
          ) : (
            <Link to="/login">
              <FaUser
                style={{
                  color: "#a509e2",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </Link>
          )}
        </RightLi>
        <RightLi>
          <FaShoppingCart
            onClick={() => showMenu()}
            style={{ color: "#a509e2", fontSize: "1.5rem", cursor: "pointer" }}
          />
        </RightLi>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
