import React from 'react';

import Nav from './Nav';

import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';

import logo from '../assets/logo-white.svg';

const Footer = ({ links }) => {
  const social = [
    { label: 'Facebook', link: 'https://facebook.com', icon: <FaFacebook /> },
    { label: 'Twitter', link: 'https://twitter.com', icon: <FaTwitter /> },
    {
      label: 'Instagram',
      link: 'https://instagram.com',
      icon: <FaInstagram />,
    },
  ];

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
            <ul>
              <li>
                <address>
                  <FaAddressBook />
                  <div>
                    <p>123 Main St.</p>
                    <p>Town, USA 12345</p>
                  </div>
                </address>
              </li>
              <li>
                <a href='tel:+18001234567'>
                  <FaPhone />
                  +1-800-123-4567
                </a>
              </li>
              <li>
                <a href='mailto:info@example.com'>info@example.com</a>
              </li>
            </ul>
          </div>
          <div className='footerSocial'>
            <h4>Social Media Links</h4>
            <ul>
              {social.map(({ label, link, icon }) => {
                return (
                  <li key={label}>
                    <a href={link}>
                      {icon} {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
