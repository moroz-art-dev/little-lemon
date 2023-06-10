import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import Highlights from '../Highlights';

const highlights = {
  title: 'This weeks specials!',
  buttonLabel: 'Online Menu',
  content: [
    {
      title: 'Greek Salad',
      price: '$12.99',
      img: 'salad',
      content:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      title: 'Bruchetta',
      price: '$5.99',
      img: 'bruchetta',
      content:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    },
    {
      title: 'Lemon Dessert',
      price: '$5.00',
      img: 'dessert',
      content:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ],
};

describe('Highlights component', () => {
  it('Should render the highlights section', () => {
    render(<Highlights highlights={highlights} />);
    const sectionElement = screen.getByTestId('highlights-section');
    expect(sectionElement).toBeInTheDocument();
  });

  it('Should render the correct number of highlight cards', () => {
    render(<Highlights highlights={highlights} />);
    const cardElements = screen.getAllByTestId('highlight-card');
    expect(cardElements).toHaveLength(highlights.content.length);
  });

  it('Should render the correct information for each highlight card', () => {
    render(<Highlights highlights={highlights} />);
    highlights.content.forEach(highlight => {
      const titleElement = screen.getByText(highlight.title);
      const priceElement = screen.getByText(highlight.price);

      expect(titleElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
    });
  });
});
