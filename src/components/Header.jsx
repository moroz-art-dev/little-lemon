import React from 'react';

import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../assets/logo.svg';

const Header = ({ links }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <Link to='/'>
            <picture>
              <img src={logo} alt='Logo' />
            </picture>
          </Link>
          <Nav links={links}></Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
