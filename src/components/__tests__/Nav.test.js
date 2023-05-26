import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Nav';

const navLinks = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/menu', label: 'Menu' },
  { link: '/reservations', label: 'Reservations' },
  { link: '/order', label: 'Order Online' },
  { link: '/login', label: 'Login' },
];

describe('Nav', () => {
  it('Renders Nav component', () => {
    render(
      <BrowserRouter>
        <Nav links={navLinks} />
      </BrowserRouter>
    );
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  it('Renders Nav links', () => {
    render(
      <BrowserRouter>
        <Nav links={navLinks} />
      </BrowserRouter>
    );
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(navLinks.length);

    linkElements.forEach((linkElement, index) => {
      const { link, label } = navLinks[index];
      expect(linkElement).toHaveAttribute('href', link);
      expect(linkElement).toHaveTextContent(label);
    });
  });
});
