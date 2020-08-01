import React from "react";
import Logo from "../../assets/images/logo_cover.png";
import Button from "../../components/Button";

import "./styles.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="FlixTube logo" />
      </a>

      <Button href="/" className="ButtonLink">
        Incluir Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
