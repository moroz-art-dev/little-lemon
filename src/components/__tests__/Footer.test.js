import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';

const mockLinks = [
  { link: '/', label: 'Home' },
  { link: 'about', label: 'About' },
  { link: 'menu', label: 'Menu' },
];

describe('Footer', () => {
  it('Renders Footer component', () => {
    render(
      <BrowserRouter>
        <Footer links={mockLinks} />
      </BrowserRouter>
    );
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('Renders Logo image with alt text', () => {
    render(
      <BrowserRouter>
        <Footer links={mockLinks} />
      </BrowserRouter>
    );
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('Renders Navigation links', () => {
    render(
      <BrowserRouter>
        <Footer links={mockLinks} />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const menuLink = screen.getByRole('link', { name: 'Menu' });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
  });

  it('Renders Contacts information', () => {
    render(
      <BrowserRouter>
        <Footer links={mockLinks} />
      </BrowserRouter>
    );
    const addressElement = screen.getByText('123 Main St.');
    const phoneElement = screen.getByText('+1-800-123-4567');
    const emailElement = screen.getByText('info@example.com');

    expect(addressElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });

  it('Renders Social Media links', () => {
    render(
      <BrowserRouter>
        <Footer links={mockLinks} />
      </BrowserRouter>
    );
    const facebookLink = screen.getByRole('link', { name: 'Facebook' });
    const twitterLink = screen.getByRole('link', { name: 'Twitter' });
    const instagramLink = screen.getByRole('link', { name: 'Instagram' });

    expect(facebookLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
  });
});
