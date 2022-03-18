import { Router } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import { Cart } from "./Components/Cart/Cart";
import Content from "./Components/Content/Content";
import { Footercontainer } from "./Components/Footer/Footercontainer";
import Header from "./Components/Header/Header";
import Shadow from "./Components/Shadow/Shadow";

import Wrapper from "./Components/Wrapper/Wrapper";
import Home from "./pages/Home";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  let mostrar = useSelector((state) => state.cart.show);

  return (
    <>
      <GlobalStyle />

      <Header />
      {mostrar && <Shadow />}
      <Cart />
      <Wrapper>
        <Content>
          <Home />
        </Content>
        <Footercontainer />
      </Wrapper>
    </>
  );
}

export default App;
