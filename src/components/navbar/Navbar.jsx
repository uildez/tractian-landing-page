import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.scss';
import { ReactComponent as Logo } from '../../assets/images/Logo-Tractian.svg';

function Navbar () {
  const [navbar, setNavbar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
      <p><a href='#home'>Início</a></p>
      <p><a href='#features'>Porque a Traction</a></p>
      <p><a href='#depoiments'>Depoimentos</a></p>
      <p><a href='#contact'>Contato</a></p>
    </>
  )  

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }
  
  window.addEventListener('scroll', changeBackground)
  

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <Logo/>
        </div>
        <div className='navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Área do Cliente</p>
        <button type='button'>
          Demonstração
        </button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu 
          ? < RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)} />
          : < RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className='navbar-menu_container-links'>
              <Menu/>
              <div className='navbar-sign-menu_container-links-sign'>
                <p>Área do Cliente</p>
                <button type='button'>
                  Demonstração
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
};

export default Navbar;
