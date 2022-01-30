import React from 'react';
import {MdOutlineAdsClick, MdOutlinePlayCircleFilled, MdSensors} from 'react-icons/md';
import Feature from '../../components/feature/Feature';
import './features.scss';

const featuresData = [
  {
    icons: <MdSensors/>,
    title: 'Sensor Tractian',
    text: 'Análise de vibração e temperatura em tempo real.',
  },
  {
    icons: <MdOutlineAdsClick/>,
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    icons: <MdOutlinePlayCircleFilled/>,
    title: 'Entenda a solução',
    text: 'Descubra como a TRACTIAN facilita a rotina do profissional de manutenção. Clique no botão ao lado para ver o vídeo.',
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">Smart Trac Monitoramento Online <br></br><p>A solução que você precisa.</p></h1>
      <button type='button'>
        <a href="https://youtu.be/1XhQDKY4Dbw?list=TLGGgKsa8jGNhvgyODAxMjAyMg" target="_blank">Acessar Vídeo</a>
      </button>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature icons={item.icons} title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;