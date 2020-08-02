import React from "react";
import { Link } from "react-router-dom";
import { Logo, Menu } from "./styles";

import IsLogo from "../../assets/images/logo_cover.png";
import Button from "../Button";

function MenuNav() {
  return (
    <Menu>
      <Link to="/">
        <Logo src={IsLogo} alt="FlixTube logo" />
      </Link>

      <Button as={Link} to="/register/video" className="ButtonLink">
        Incluir Vídeo
      </Button>
    </Menu>
  );
}

export default MenuNav;
