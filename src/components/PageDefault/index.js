import React from "react";

import MenuNav from "../MenuNav";
import Footer from "../Footer";

import { Main } from "./styles";

function PageDefault({ children }) {
  return (
    <>
      <MenuNav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
