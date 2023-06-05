import React from 'react';

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

export default Nav;
