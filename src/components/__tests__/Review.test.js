import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import Review from '../Review';

describe('Review component', () => {
  const review = {
    name: 'Emily',
    rating: 4,
    img: 'emily',
    content: 'Delicious flavors! Loved the variety of dishes.',
  };

  test('Renders review name', () => {
    render(<Review review={review} />);
    const nameElement = screen.getByText(/Emily/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('Renders review content', () => {
    render(<Review review={review} />);
    const contentElement = screen.getByText(
      /Delicious flavors! Loved the variety of dishes./i
    );
    expect(contentElement).toBeInTheDocument();
  });

  test('Renders stars with correct rating', () => {
    render(<Review review={review} />);
    const stars = screen.getAllByTestId('star-filled');
    expect(stars.length).toEqual(4);
  });
});
