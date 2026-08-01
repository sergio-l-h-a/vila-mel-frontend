import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
        min-height: 100vh;
    }
`;