import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/menu', label: 'Menu' },
    { link: '/reservations', label: 'Reservations' },
    { link: '/order', label: 'Order Online' },
    { link: '/login', label: 'Login' },
  ];

  it('renders the logo', () => {
    render(
      <BrowserRouter>
        <Header links={links} />
      </BrowserRouter>
    );

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(
      <BrowserRouter>
        <Header links={links} />
      </BrowserRouter>
    );

    const homeLinks = screen.queryAllByRole('link', {
      name: 'Home',
      href: '/',
    });
    expect(homeLinks.length).toBe(2);

    const aboutLink = screen.getByRole('link', {
      name: 'About',
      href: '/about',
    });
    expect(aboutLink).toBeInTheDocument();
  });
});
