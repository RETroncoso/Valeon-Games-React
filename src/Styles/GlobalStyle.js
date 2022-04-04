import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html {
  height: 100vh;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #121212;
    color: #fafafa;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 100%;
}

a {
    text-decoration: none;
    color: #d3bfd6;
    font-weight: 600;
}

li {
    list-style: none;
}

::placeholder {
    color: white;
}
`;
