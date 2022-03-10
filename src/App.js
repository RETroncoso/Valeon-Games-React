import { Router } from "react-router-dom";

import "./App.css";
import Content from "./Components/Content/Content";
import { Footercontainer } from "./Components/Footer/Footercontainer";
import Header from "./Components/Header/Header";

import Wrapper from "./Components/Wrapper/Wrapper";
import Home from "./pages/Home";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
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
