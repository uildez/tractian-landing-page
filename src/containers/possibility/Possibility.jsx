import React from 'react';
import possibilityImage from '../../assets/images/possibility.png';
import possibilityMobile from '../../assets/images/possibility-mobile.png';
import './possibility.scss';

document.addEventListener("mousemove", parallax);
function parallax (e) {
  document.querySelectorAll(".object").forEach(function(move){
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 150;
    var y = (e.clientY * moving_value) / 150;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"; 
  })
}

const Possibility = () => (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image">
      <img className="object motor" data-value="-7" src={possibilityImage} alt="possibility" />
      <img className="object mobile" data-value="-3" src={possibilityMobile} alt="possibility-mobile" />
    </div>
    <div className="possibility-content">
      <h4>Manutenção Preventiva Descomplicada</h4>
      <h1 className="gradient__text">Mantenha a sua equipe e <br></br>seus ativos com o melhor desempenho</h1>
      <p>Nossos sensores enviam dados do seu equipamento através de rede 3g/4g. Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina.</p>
      <h4>Sensor Plug & Play | Monitoramento Online | Gestão de Ativos</h4>
    </div>
  </div>
);

export default Possibility;