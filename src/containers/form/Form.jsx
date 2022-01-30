import React, { useState } from 'react';
import './form.scss';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="form-style" id="contact">
      <div className="form-group name-tel">
        <label htmlFor="name">
          Seu nome
          <input
            type="text"
            placeholder="Insira seu nome"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="telefone">
          Seu Telefone
          <input
            type="tel"
            placeholder="(xx) XXXXX-XXXX"
            id="fone"
            name="fone"
            value={fone}
            pattern="([0-9]{2}) [0-9]{5}-[0-9]{4}" required
            onChange={(e) => setFone(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Email profissional
          <input
            required  	
            type="email"
            placeholder="Insira seu email corporativo"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Messagem
          <textarea
            required
            type="text"
            placeholder="Insira sua mensagem"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Send</button>
    </div>
    
  );
}