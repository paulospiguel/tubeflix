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

html,
body,
#root {
  min-height: 100%;
}

body {
  background: #141414 url("./assets/background.jpg") no-repeat;*/
  background-size: cover;
  -webkit-font-smoothing: antialiased !important;
  color: ${(props) => (props.whiteColor ? "white" : "black")};
}

body,
input,
button {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

a {
  color: inherit;
}

button {
  cursor: pointer;
}
`;
export default GlobalStyle;
