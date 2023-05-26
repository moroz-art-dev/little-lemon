import React from 'react';
import { render, screen } from '@testing-library/react';
import Stars from '../Stars';

describe('Stars component', () => {
  test('renders Stars by default', () => {
    render(<Stars rating={0} />);

    const starsContainer = screen.getByTestId('stars-container');
    const filledStars = screen.queryAllByTestId('star-filled');
    const emptyStars = screen.queryAllByTestId('star-empty');

    expect(starsContainer).toBeInTheDocument();
    expect(filledStars.length).toBe(0);
    expect(emptyStars.length).toBe(5);
  });

  test('renders correct number of filled stars based on rating', () => {
    const rating = 3.5;

    render(<Stars rating={rating} />);

    const filledStars = screen.getAllByTestId('star-filled');
    expect(filledStars.length).toBe(4);
  });

  test('renders correct number of empty stars based on rating', () => {
    const rating = 3.5;

    render(<Stars rating={rating} />);

    const emptyStars = screen.getAllByTestId('star-empty');
    expect(emptyStars.length).toBe(1);
  });

  test('renders correct number of filled and empty stars when rating is 0', () => {
    const rating = 0;

    render(<Stars rating={rating} />);

    const filledStars = screen.queryAllByTestId('star-filled');
    const emptyStars = screen.queryAllByTestId('star-empty');

    expect(filledStars.length).toBe(0);
    expect(emptyStars.length).toBe(5);
  });
});
