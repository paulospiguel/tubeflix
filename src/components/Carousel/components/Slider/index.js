import React from "react";
import SlickSlider from "react-slick";
import { Container } from "./styles";

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        dots: true,
        speed: 300,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
