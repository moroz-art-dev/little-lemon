import React from 'react';

import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = ({ menu, logoHeader }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <Link to={logoHeader.src} aria-label={logoHeader.arialLabel} >
            <picture>
              <img src={logoHeader.imgSrc} alt={logoHeader.title} />
            </picture>
          </Link>
          <Nav links={menu.links}></Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
