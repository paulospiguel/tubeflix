import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo_cover.png";
import Button from "../../components/Button";

import "./styles.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="FlixTube logo" />
      </Link>

      <Button as={Link} to="/register/video" className="ButtonLink">
        Incluir Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
