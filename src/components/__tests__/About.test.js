import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';
import restaurant from '../../assets/restaurant.jpg';
import restaurantBoss from '../../assets/restaurant-chef-b.jpg';

describe('About component', () => {
  test('Renders component', () => {
    render(<About />);
  });

  test('Renders the "Little Lemon" heading', () => {
    render(<About />);
    const headingElement = screen.getByText('Little Lemon');
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders the "London" subheading', () => {
    render(<About />);
    const subheadingElement = screen.getByText('London');
    expect(subheadingElement).toBeInTheDocument();
  });

  test('Renders the paragraph', () => {
    render(<About />);
    const paragraphElement = screen.getByText(
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  test('Renders the restaurant chef image', () => {
    render(<About />);
    const chefImageElement = screen.getByAltText('restaurant-chef-b');
    expect(chefImageElement).toBeInTheDocument();
    expect(chefImageElement.getAttribute('src')).toBe(restaurantBoss);
  });

  test('Renders the restaurant image', () => {
    render(<About />);
    const restaurantImageElement = screen.getByAltText('restaurant', {
      sibling: screen.getByAltText('restaurant'),
    });
    expect(restaurantImageElement).toBeInTheDocument();
    expect(restaurantImageElement.getAttribute('src')).toBe(restaurant);
  });
});
