import React from 'react';
import './header.scss';
import ai from '../../assets/images/ai.png';

const Header = () => {
  return (
    <div className='header section_padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient-text'>Monitoramento Online e Gestão de Ativos em um só lugar</h1>
        <p>Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.</p>
        
        <div className='header-content-input'>
          <button type="button">Ver Demonstração</button>
        </div>
      </div>
      <div className='header-image'>
        <img src={ai} alt=""/>
      </div>
    </div>
  )
};

export default Header;