import React from "react";
import { FooterBase } from "./styles";
import Slogan from "../../assets/images/slogan.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Slogan} alt="Slogan" className="slogan" />
      </a>
      <p>Orgulhosamente criado por Paulo Spiguel 💜</p>
    </FooterBase>
  );
}

export default Footer;
