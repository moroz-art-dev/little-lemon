import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import Card from '../Card';

import salad from '../../assets/greek-salad.jpg';

describe('Card', () => {
  const mockHighlight = {
    title: 'Greek Salad',
    price: '$12.99',
    img: salad,
    content:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  };

  it('Renders Card component', () => {
    render(<Card highlight={mockHighlight} />);
    const cardElement = screen.getByRole('article');
    expect(cardElement).toBeInTheDocument();
  });

  it('Renders Card content correctly', () => {
    render(<Card highlight={mockHighlight} />);
    const titleElement = screen.getByRole('heading', {
      name: mockHighlight.title,
    });
    const priceElement = screen.getByText(mockHighlight.price);
    const contentElement = screen.getByText(mockHighlight.content);

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('Renders Order a Delivery button with motorcycle icon', () => {
    render(<Card highlight={mockHighlight} />);
    const buttonElement = screen.getByRole('button', {
      name: 'Order a Delivery',
    });
    const motorcycleIconElement = screen.getByTestId('motorcycle-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(motorcycleIconElement).toBeInTheDocument();
  });
});
