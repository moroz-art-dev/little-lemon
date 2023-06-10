import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import Routing from '../Routing';

const testimonials = {
  title: '',
  content: [],
};
const highlights = {
  title: '',
  buttonLabel: '',
  content: [],
};
const aboutContent = {
  title: 'Little Lemon',
  location: '',
  description: '',
  imageSrc1: '',
  imageAlt1: '',
  imageSrc2: '',
  imageAlt2: '',
};

const heroContent = {
  title: 'Little Lemon',
  location: '',
  description: '',
  buttonLabel: '',
  imageSrc: '',
  imageAlt: '',
};

describe('Routing component', () => {
  test('renders Home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routing
          testimonials={testimonials}
          highlights={highlights}
          aboutContent={aboutContent}
          heroContent={heroContent}
        />
      </MemoryRouter>
    );

    const homeElements = screen.getAllByText('Little Lemon');
    expect(homeElements.length).toBeGreaterThan(0);
  });

  test('renders Reservations page', () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <Routing
          testimonials={testimonials}
          highlights={highlights}
          aboutContent={aboutContent}
          heroContent={heroContent}
        />
      </MemoryRouter>
    );

    const reservationsElement = screen.getByText('Reservations');
    expect(reservationsElement).toBeInTheDocument();
  });
});
