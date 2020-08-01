import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
import Button from "../Button/index.js";
//import ButtonLink from '../components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to=" /">
        <img className="Logo" src={Logo} alt="BitaFlix Logo"></img>
      </Link>

      <Button
        as={Link}
        /*se comporta como a*/ className="ButtonLink"
        to="cadastro/video"
      >
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
