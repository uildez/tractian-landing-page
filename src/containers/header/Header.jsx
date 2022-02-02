import React from 'react';
import './header.scss';
import ai from '../../assets/images/ai.png';


document.addEventListener("mousemove", parallax);
function parallax (e) {
  document.querySelectorAll(".object").forEach(function(move){
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 150;
    var y = (e.clientY * moving_value) / 150;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"; 
  })
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
        <img className="object" data-value="-2" src={ai} alt=""/>
      </div>
    </div>
  )
};

export default Header;