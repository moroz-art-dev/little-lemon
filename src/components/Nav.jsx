import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, NavLink } from 'react-router-dom';

const Nav = ({ links }) => {
  const navigate = useNavigate();
  const [linkActive, setLinkActive] = useState(null);

  const handleClick = (link, shouldScroll) => {
    if (shouldScroll) {
      const id = `${link}-section`;
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        navigate('/');
      }
      setLinkActive(id);
    } else {
      setLinkActive(null);
    }
  };

  useEffect(() => {
    if (linkActive) {
      setTimeout(() => {
        const element = document.getElementById(linkActive);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, [linkActive]);

  return (
    <nav className='nav'>
      <ul>
        {links.map(({ link, label, scroll }) => (
          <li key={label}>
            {scroll ? (
              <a aria-label={label} onClick={() => handleClick(link, true)}>
                {label}
              </a>
            ) : (
              <NavLink
                to={link}
                aria-label={label}
                onClick={() => handleClick(link, false)}
              >
                {label}
              </NavLink>
            )}
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
      scroll: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Nav;
