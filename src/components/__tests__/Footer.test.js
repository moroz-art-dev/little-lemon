import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';
import * as FaIcons from 'react-icons/fa';

const socialMenu = {
  title: 'Social Media Links',
  content: [
    {
      label: 'Facebook',
      link: 'https://facebook.com',
      icon: <FaIcons.FaFacebook />,
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com',
      icon: <FaIcons.FaTwitter />,
    },
    {
      label: 'Instagram',
      link: 'https://instagram.com',
      icon: <FaIcons.FaInstagram />,
    },
  ],
};

const contacts = {
  title: 'Contacts',
  iconAddress: '',
  content: ['123 Main St.', 'Town, USA 12345'],
  iconPhone: '',
  phone: '+1-800-123-4567',
  tel: 'tel:+18001234567',
  mail: 'info@example.com',
};

const logoFooter = {
  src: '/',
  title: 'Logo',
  imgSrc: '',
};

const menu = {
  title: 'Links',
  links: [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/menu', label: 'Menu' },
    { link: '/reservations', label: 'Reservations' },
    { link: '/order', label: 'Order Online' },
    { link: '/login', label: 'Login' },
  ],
};

describe('Footer', () => {
  it('Renders Footer component', () => {
    render(
      <BrowserRouter>
        <Footer
          menu={menu}
          logoFooter={logoFooter}
          contacts={contacts}
          socialMenu={socialMenu}
        />
      </BrowserRouter>
    );
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('Renders Logo image with alt text', () => {
    render(
      <BrowserRouter>
        <Footer
          menu={menu}
          logoFooter={logoFooter}
          contacts={contacts}
          socialMenu={socialMenu}
        />
      </BrowserRouter>
    );
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('Renders Navigation links', () => {
    render(
      <BrowserRouter>
        <Footer
          menu={menu}
          logoFooter={logoFooter}
          contacts={contacts}
          socialMenu={socialMenu}
        />
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
        <Footer
          menu={menu}
          logoFooter={logoFooter}
          contacts={contacts}
          socialMenu={socialMenu}
        />
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
        <Footer
          menu={menu}
          logoFooter={logoFooter}
          contacts={contacts}
          socialMenu={socialMenu}
        />
      </BrowserRouter>
    );

    const facebookLinks = screen.getAllByRole('link', {
      name: 'Link to Facebook',
    });
    const twitterLinks = screen.getAllByRole('link', {
      name: 'Link to Twitter',
    });
    const instagramLinks = screen.getAllByRole('link', {
      name: 'Link to Instagram',
    });

    expect(facebookLinks.length).toBe(1);
    expect(twitterLinks.length).toBe(1);
    expect(instagramLinks.length).toBe(1);
  });
});
