import React from 'react';
import './feature.scss';

const Feature = ({ icons, title, text }) => (
  <div className="features-container__feature">
    <div className="features-container__feature-title">
      <div>{icons}</div>
      <h1>{title}</h1>
    </div>
    <div className="features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
