import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../components/PageDefault";

import { FaTrash, FaEdit } from "react-icons/fa";

import { FormGroup, Container } from "./styles";

import FormField from "../../components/FormField";
import ListItem from "../../components/ListItem";

const initialValue = {
  name: "",
  description: "",
  color: "",
};

function RegisterCategories() {
  const [values, setValues] = useState(initialValue);
  const [categories, setCategories] = useState([]);

  const setValue = (key, value) => {
    console.log("[testValues]", [key], value);
    setValues({ ...values, [key]: value });
  };

  const handleChange = ({ target }) => {
    setValue(target.getAttribute("name"), target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((prevValue) => [...prevValue, values]);
    setValues(initialValue);
    console.log("[values]", [...categories, values]);
  };

  return (
    <PageDefault>
      <Container>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormField
              label="Nome da Categoria"
              type="text"
              value={values.name}
              name="name"
              onChange={handleChange}
              placeholder="Digite o nome da categoria..."
            />

            <FormField
              label="Descrição"
              type="textarea"
              rows="5"
              value={values.description}
              name="description"
              onChange={handleChange}
              placeholder="Digite a descrição da categoria..."
            />

            <FormField
              label="Cor"
              type="color"
              value={values.color}
              name="color"
              onChange={handleChange}
            />
            <button type="submit">Cadastrar</button>
          </FormGroup>
        </form>

        <div style={{ marginTop: 20 }}>
          <p>Lista de Caterorias</p>
          <ul>
            {!categories.length ? (
              <span>Nenhuma categoria cadastrada</span>
            ) : (
              categories.map((el, idx) => (
                <li key={idx}>
                  <ListItem color={el.color}>
                    <span>{el.name}</span>
                    <div>
                      <FaTrash size={12} />
                      <FaEdit ize={12} />
                    </div>
                  </ListItem>
                </li>
              ))
            )}
          </ul>
        </div>

        <br />
        <Link to="/">Ir para Home</Link>
      </Container>
    </PageDefault>
  );
}

export default RegisterCategories;
