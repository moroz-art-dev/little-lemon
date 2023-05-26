import React from 'react';
import { render, screen } from '@testing-library/react';
import Review from '../Review';

describe('Review component', () => {
  const review = {
    name: 'Mario and Adrian',
    rating: 5,
    img: 'marioAdrianA',
    content: 'Custom text',
  };

  test('Renders review name', () => {
    render(<Review review={review} />);
    const nameElement = screen.getByText(/Mario and Adrian/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('Renders review content', () => {
    render(<Review review={review} />);
    const contentElement = screen.getByText(/Custom text/i);
    expect(contentElement).toBeInTheDocument();
  });

  test('Renders stars with correct rating', () => {
    render(<Review review={review} />);
    const stars = screen.getAllByTestId('star-filled');
    expect(stars.length).toEqual(5);
  });
});