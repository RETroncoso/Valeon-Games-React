import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #121212;
    color: #fafafa;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 ;
}

a {
    text-decoration: none;
    color: #a509e2;
    font-weight: 600;
}

a:hover {
    color: #cd83eb;
}

li {
    list-style: none;
}

::placeholder {
    color: white;
}
`;
