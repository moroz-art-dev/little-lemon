import React from 'react';

const Nav = ({ links }) => {
  return (
    <nav className='nav'>
      <ul>
        {links.map(({ link, label }, index) => (
          <li key={index}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
