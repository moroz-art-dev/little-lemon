import React from 'react';

import Nav from './Nav';
import logo from '../assets/logo.svg';

const Footer = ({ links }) => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='col-2'>
            <h4>Links</h4>
            <Nav links={links}></Nav>
          </div>
          <div className='col-2'>
            <h4>Contacts</h4>
            <address>
              <p>123 Main St.</p>
              <p>Town, USA 12345</p>
            </address>
            <a href="tel:+18001234567">+1-800-123-4567</a>
            <a href='mailto:info@example.com'>info@example.com</a>
          </div>
          <div className='col-2'>
            <h4>Social Media Links</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
