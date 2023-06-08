import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ links }) => {
  return (
    <nav className='nav'>
      <ul>
        {links.map(({ link, label }, index) => (
          <li key={index}>
            <NavLink to={link} aria-label={label}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Nav;
