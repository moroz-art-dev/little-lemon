import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import About from '../About';
import restaurant from '../../assets/restaurant.jpg';
import restaurantBoss from '../../assets/restaurant-chef-b.jpg';

const aboutContent = {
  title: 'Little Lemon',
  location: 'London',
  description:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  imageSrc1: restaurantBoss,
  imageAlt1: 'restaurant-chef-b',
  imageSrc2: restaurant,
  imageAlt2: 'restaurant',
};

describe('About component', () => {
  test('Renders component', () => {
    render(<About aboutContent={aboutContent} />);
  });

  test('Renders the "Little Lemon" heading', () => {
    render(<About aboutContent={aboutContent} />);
    const headingElement = screen.getByText('Little Lemon');
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders the "London" subheading', () => {
    render(<About aboutContent={aboutContent} />);
    const subheadingElement = screen.getByText('London');
    expect(subheadingElement).toBeInTheDocument();
  });

  test('Renders the paragraph', () => {
    render(<About aboutContent={aboutContent} />);
    const paragraphElement = screen.getByText(
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  test('Renders the restaurant chef image', () => {
    render(<About aboutContent={aboutContent} />);
    const chefImageElement = screen.getByAltText('restaurant-chef-b');
    expect(chefImageElement).toBeInTheDocument();
    expect(chefImageElement.getAttribute('src')).toBe(restaurantBoss);
  });

  test('Renders the restaurant image', () => {
    render(<About aboutContent={aboutContent} />);
    const restaurantImageElement = screen.getByAltText('restaurant', {
      sibling: screen.getByAltText('restaurant'),
    });
    expect(restaurantImageElement).toBeInTheDocument();
    expect(restaurantImageElement.getAttribute('src')).toBe(restaurant);
  });
});
