import React, { useState } from 'react';
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import Logo from '../../assets/images/Logo-Tractian.svg';
import './footer.scss';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={Logo} alt="Logo Tractian" />
        <p href="#">Plataforma de Monitoramento</p><br></br>
        <p className="info-brand">© Tractian Tecnologia Ltda <br></br> CNPJ: 35.755.699/0001-84</p>
      </div>
      <div className="footer-links_div">
        <h4>Menu</h4>
        <p href="#home">Início</p>
        <p href="#">Porque a Traction</p>
        <p href="#">Depoimentos</p>
        <p href="#">Contatos</p>
      </div>
      <div className="footer-links_div">
        <h4>Fale Conosco</h4>
        <p href="#contact">Contato</p>
        <p href="#">Agende uma Demonstração</p>
      </div>
      <div className="footer-links_div">
        <h4>Conecte-se com a Tractian</h4>
        <p href="https://www.instagram.com/tractian" target="_blank"><SiInstagram/> Instagram</p>
        <p href="https://www.facebook.com/tractian" target="_blank"><SiFacebook/> Facebook</p>
        <p href="https://www.linkedin.com/company/tractian/" target="_blank"><SiLinkedin/> LinkedIn</p>
        <p href="https://www.youtube.com/c/TRACTIAN" target="_blank"><SiYoutube/> Youtube</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p href="#">@2021 Tractian. Todos os Direitos Reservados.</p>
    </div>
  </div>
);

export default Footer;