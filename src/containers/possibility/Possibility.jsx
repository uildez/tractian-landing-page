import React from 'react';
import possibilityImage from '../../assets/images/possibility.png';
import './possibility.scss';

const Possibility = () => (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image">
      <img src={possibilityImage} alt="possibility" />
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