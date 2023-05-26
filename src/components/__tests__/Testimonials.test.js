import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Testimonials from '../Testimonials';

const testimonials = [
  {
    name: 'Mario and Bob',
    rating: 5,
    img: 'marioAdrianA',
    content: 'Custom text',
  },
  {
    name: 'Mario and Adrian',
    rating: 4,
    img: 'marioAdrianA',
    content: 'Custom text',
  },
  {
    name: 'Mario and Alex',
    rating: 5,
    img: 'marioAdrianB',
    content: 'Custom text',
  },
  {
    name: 'Alex',
    rating: 3,
    img: 'marioAdrianB',
    content: 'Custom text',
  },
];

describe('Testimonials component', () => {
  test('renders Testimonials component', () => {
    render(<Testimonials testimonials={testimonials} />);

    const testimonialsSection = screen.getByTestId('testimonials-section');
    expect(testimonialsSection).toBeInTheDocument();

    const reviewElements = screen.getAllByTestId('review');
    expect(reviewElements.length).toBe(testimonials.length);
  });

  test('renders correct number of testimonial reviews', () => {
    render(<Testimonials testimonials={testimonials} />);

    const reviewElements = screen.getAllByTestId('review');
    expect(reviewElements.length).toBe(testimonials.length);
  });

  test('displays testimonial names correctly', () => {
    render(<Testimonials testimonials={testimonials} />);

    const reviewElements = screen.getAllByTestId('review');
    testimonials.forEach((testimonial, index) => {
      const nameElement = within(reviewElements[index]).getByText(
        testimonial.name
      );
      expect(nameElement).toBeInTheDocument();
      expect(nameElement).toHaveTextContent(testimonial.name);
    });
  });
});
