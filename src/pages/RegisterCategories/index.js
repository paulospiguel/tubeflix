import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../components/PageDefault";

function RegisterCategories() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <br />
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default RegisterCategories;
