import React from "react";
import PageDefault from "../../components/PageDefault";

import Img404 from "../../assets/images/404Page.svg";
import { Container } from "./styles";

import { Link } from "react-router-dom";

function Page404() {
  return (
    <PageDefault>
      <Container>
        <img src={Img404} alt="404 Page not found" />
        <h1>Ops...</h1>
        <h1>Página não encontrada!</h1>
        <Link to="/"> 👉 Ir para Home</Link>
      </Container>
    </PageDefault>
  );
}

export default Page404;
