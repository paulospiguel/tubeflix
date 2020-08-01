import React from "react";
import PageDefault from "../../components/PageDefault";

import { Link } from "react-router-dom";

function Page404() {
  return (
    <PageDefault>
      <h1>Página não encontrada</h1>
      <br />
      <Link to="/"> Ir para Home</Link>
    </PageDefault>
  );
}

export default Page404;
