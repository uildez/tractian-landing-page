import React from 'react';

import { Footer, Form, Possibility, Features, Header } from './containers';
import { Navbar, Brand, Cta, Testimonials } from './components';

import './style/App.scss'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Testimonials/>
      <Form/>
      <Footer/>
    </div>
  )
};

export default App;
