import React from "react";

import PageDefault from "../../components/PageDefault";

import dataInitial from "../../data/dados_iniciais.json";
import Carousel from "../../components/Carousel";
import BannerMain from "../../components/BannerMain";

function Home() {
  return (
    <>
      <BannerMain
        videoTitle={dataInitial.categorias[0].videos[0].titulo}
        url={dataInitial.categorias[0].videos[0].url}
        videoDescription={
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      />
      <PageDefault>
        <Carousel ignoreFirstVideo category={dataInitial.categorias[0]} />

        <Carousel category={dataInitial.categorias[1]} />

        <Carousel category={dataInitial.categorias[2]} />

        <Carousel category={dataInitial.categorias[3]} />

        <Carousel category={dataInitial.categorias[4]} />

        <Carousel category={dataInitial.categorias[5]} />
      </PageDefault>
    </>
  );
}

export default Home;
