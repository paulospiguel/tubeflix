import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primary: #7159c1;
    --black: #000;
    --blackLighter: #9e9e9e;
    --grayLight: #f5f5f5;
    --grayMedium: #e5e5e5;
    --white: #fff;
    --frontEnd: #6bd1ff;
    --backEnd: #00c86f;
  }

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #141414 url("./assets/background.jpg") no-repeat;
  background-size: cover;
  color: ${(props) => (props.whiteColor ? "white" : "black")};
  -webkit-font-smoothing: antialiased !important;
}

body,
input,
button {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

#root {
  min-height: calc(100vh - var(--bodyPaddingTop));
  display: flex;
  flex-direction: column;
}


a {
  color: inherit;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
