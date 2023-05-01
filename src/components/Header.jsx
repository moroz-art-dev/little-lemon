import React from 'react';

import Nav from './Nav';
import logo from '../assets/logo.svg';

const Header = ({ links }) => {

  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='col-6'>
            <img src={logo} alt='Logo' />
            <Nav links={links}></Nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
