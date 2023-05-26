import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';
import restaurantFood from '../../assets/restaurant-food.jpg';

describe('Hero component', () => {
  test('Renders component', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
  });

  test('Renders the "Little Lemon" heading', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const headingElement = screen.getByText('Little Lemon');
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders the "London" subheading', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const subheadingElement = screen.getByText('London');
    expect(subheadingElement).toBeInTheDocument();
  });

  test('Renders the "Reserve a Table" button', () => {
    render(
      <BrowserRouter>
        <Hero />
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
        <Hero />
      </BrowserRouter>
    );
    const imageElement = screen.getByAltText('restaurant-food');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toBe(restaurantFood);
  });
});
