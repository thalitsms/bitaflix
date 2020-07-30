import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button/index.js';
//import ButtonLink from '../components/ButtonLink';



function Menu () {
  return (
    <nav className="Menu">
        <a href=" /">
        <img className="Logo" src={Logo} alt ="OngFlix Logo"></img>
        </a>

        <Button  as="a" /*se comporta como a*/className="ButtonLink" href="/">
        Novo vídeo
        </Button>
    </nav>
  );
}

export default Menu;
