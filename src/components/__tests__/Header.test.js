import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

const logoHeader = {
  src: '/',
  title: 'Logo',
  imgSrc: 'logoHeaderSrc',
  arialLabel: 'Home',
};

const menu = {
  title: 'Links',
  links: [
    { link: '/', label: 'Home', scroll: false },
    { link: 'menu', label: 'Menu', scroll: true },
    { link: 'testimonials', label: 'Reviews', scroll: true },
    { link: 'about', label: 'About', scroll: true },
    { link: 'reservations', label: 'Reservations', scroll: false },
  ],
};

describe('Header', () => {
  it('renders the logo', () => {
    render(
      <BrowserRouter>
        <Header menu={menu} logoHeader={logoHeader} />
      </BrowserRouter>
    );

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(
      <BrowserRouter>
        <Header menu={menu} logoHeader={logoHeader} />
      </BrowserRouter>
    );

    const homeLinks = screen.queryAllByRole('link', {
      name: 'Home',
      href: '/',
    });
    expect(homeLinks.length).toBe(2);

    const aboutLink = screen.getByRole('link', {
      name: 'Reservations',
      href: '/reservations',
    });
    expect(aboutLink).toBeInTheDocument();
  });
});
