import React from 'react';
import './cta.scss';

const CTA = () => (
  <div className="cta">
    <div className="cta-content">
      <p>Ficou curioso de como funciona?</p>
      <h3>Nós explicamos para vocês. Clique no botão ao lado.</h3>
    </div>
    <div className="cta-btn">
      <button type="button"><a href="https://www.youtube.com/watch?v=2JUH7Z17NEE" target="_blank">Ver como funciona</a></button>
    </div>
  </div>
);

export default CTA;