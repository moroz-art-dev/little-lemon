import React from 'react';

import { Link } from "react-router-dom";

const Nav = ({ links }) => {
  return (
    <nav className='nav'>
      <ul>
        {links.map(({ link, label }, index) => (
          <li key={index}>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
