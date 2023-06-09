import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = ({ menu, logoHeader }) => {
  const headerBox = useRef(null);
  const [yOffset, setYOffset] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentYOffset = window.pageYOffset;
    headerBox.current = yOffset < currentYOffset && currentYOffset !== 0;
    setYOffset(currentYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <Link to={logoHeader.src} aria-label={logoHeader.arialLabel}>
            <picture>
              <img src={logoHeader.imgSrc} alt={logoHeader.title} />
            </picture>
          </Link>
          <Nav links={menu.links} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  menu: PropTypes.object.isRequired,
  logoHeader: PropTypes.shape({
    src: PropTypes.string.isRequired,
    arialLabel: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
