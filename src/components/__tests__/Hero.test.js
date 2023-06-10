import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from '@jest/globals';
import Hero from '../Hero';
import restaurantFood from '../../assets/restaurant-food.jpg';

const heroContent = {
  title: 'Little Lemon',
  location: 'London',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonLabel: 'Reserve a Table',
  imageSrc: restaurantFood,
  imageAlt: 'restaurant-food',
};

describe('Hero component', () => {
  test('Renders component', () => {
    render(
      <BrowserRouter>
        <Hero heroContent={heroContent} />
      </BrowserRouter>
    );
  });

  test('Renders the "Little Lemon" heading', () => {
    render(
      <BrowserRouter>
        <Hero heroContent={heroContent} />
      </BrowserRouter>
    );
    const headingElement = screen.getByText('Little Lemon');
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders the "London" subheading', () => {
    render(
      <BrowserRouter>
        <Hero heroContent={heroContent} />
      </BrowserRouter>
    );
    const subheadingElement = screen.getByText('London');
    expect(subheadingElement).toBeInTheDocument();
  });

  test('Renders the "Reserve a Table" button', () => {
    render(
      <BrowserRouter>
        <Hero heroContent={heroContent} />
      </BrowserRouter>
    );
    const buttonElement = screen.getByRole('link', {
      name: /Reserve a Table/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', '/reservations');
  });

  test('Renders the restaurant image', () => {
    render(
      <BrowserRouter>
        <Hero heroContent={heroContent} />
      </BrowserRouter>
    );
    const imageElement = screen.getByAltText('restaurant-food');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toBe(restaurantFood);
  });
});
