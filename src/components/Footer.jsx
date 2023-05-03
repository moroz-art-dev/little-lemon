import React from 'react';

import Nav from './Nav';
import logo from '../assets/logo-white.svg';

const Footer = ({ links }) => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footerLogo'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='footerLinks'>
            <h4>Links</h4>
            <Nav links={links}></Nav>
          </div>
          <div className='footerContacts'>
            <h4>Contacts</h4>
            <address>
              <p>123 Main St.</p>
              <p>Town, USA 12345</p>
            </address>
            <a href='tel:+18001234567'>+1-800-123-4567</a>
            <a href='mailto:info@example.com'>info@example.com</a>
          </div>
          <div className='footerSocial'>
            <h4>Social Media Links</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
