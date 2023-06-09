import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = ({ menu, socialMenu, contacts, logoFooter }) => {
  const renderContactContent = () => {
    return contacts.content.map(text => <p key={text}>{text}</p>);
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

Footer.propTypes = {
  menu: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  socialMenu: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
      })
    ).isRequired,
  }).isRequired,
  contacts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    iconAddress: PropTypes.node.isRequired,
    tel: PropTypes.string.isRequired,
    iconPhone: PropTypes.node.isRequired,
    phone: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }).isRequired,
  logoFooter: PropTypes.shape({
    src: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
