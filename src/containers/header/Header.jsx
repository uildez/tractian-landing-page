import React from 'react';
import './header.scss';
import { gsap, Power1 } from "gsap";
import ai from '../../assets/images/ai.png';

function animate () {
  (document).mousemove(function(event){
  
    (".header-image").each(function(index, element){
      
      var xPos = (event.clientX/(window).width())-0.5,
         yPos = (event.clientY/(window).height())-0.5,
         box = element;
    
    gsap.to(box, 1, {
      rotationY: xPos * 100, 
      rotationX: yPos * 100,
      ease: Power1.easeOut,
    });
      
    })  
  });
}

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