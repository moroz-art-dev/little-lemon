import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Footer = ({ menu, socialMenu, contacts, logoFooter }) => {
  const renderContactContent = () => {
    return contacts.content.map((text) => <p key={text}>{text}</p>);
  };

  const renderSocialMenuItems = () => {
    return socialMenu.content.map(({ label, link, icon }) => (
      <li key={label}>
        <a href={link} aria-label={`Link to ${label}`}>
          {icon} {label}
        </a>
      </li>
    ));
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footerLogo'>
            <Link to={logoFooter.src}>
              <picture>
                <img src={logoFooter.imgSrc} alt={logoFooter.title} />
              </picture>
            </Link>
          </div>
          <div className='footerLinks'>
            <h4>{menu.title}</h4>
            <Nav links={menu.links} />
          </div>
          <div className='footerContacts'>
            <h4>{contacts.title}</h4>
            <ul>
              <li>
                <address>
                  {contacts.iconAddress}
                  <div>{renderContactContent()}</div>
                </address>
              </li>
              <li>
                <a href={contacts.tel} aria-label='Link to phone'>
                  {contacts.iconPhone}
                  {contacts.phone}
                </a>
              </li>
              <li>
                <a href={'mailto:' + contacts.mail} aria-label='Link to mail'>
                  {contacts.mail}
                </a>
              </li>
            </ul>
          </div>
          <div className='footerSocial'>
            <h4>{socialMenu.title}</h4>
            <ul>{renderSocialMenuItems()}</ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
