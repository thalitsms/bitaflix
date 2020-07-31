import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/img/Logo.png';
import IconLinkedin from '../../assets/img/linkedin.png';
import IconTwitter from '../../assets/img/twitter.png';
import IconGithub from '../../assets/img/github.png';



function Footer() {
  return (
    <FooterBase>
     <img style={{ width: 'auto', height: '50px' }} src={Logo} alt="Logo BitaFlix" />
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a> por Thalita Mayra
      </p>

      <p style={{ display: 'flex', justifyContent: 'center' }}>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/thalitsms"><img alt="Linkedin Thalita" style={{ width: '32px', margin: '4px' }} src={IconLinkedin} /></a>
        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/thalitsms"><img alt="Twitter Thalita" style={{ width: '32px', margin: '4px' }} src={IconTwitter} /></a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/thalitsms"><img alt="Github Thalita" style={{ width: '32px', margin: '4px' }} src={IconGithub} /></a>
      </p>

      <p style={{ fontSize: '.6em' }}>

        Ícones feitos por
        {' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
        {' '}
        e
        {' '}
        <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
        {' '}
        em
        {' '}
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>


    </FooterBase>
  );
}

export default Footer;
