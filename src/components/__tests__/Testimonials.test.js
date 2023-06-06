import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Testimonials from '../Testimonials';

const testimonials = {
  title: 'Testimonials',
  content: [
    {
      name: 'Emily',
      rating: 4,
      img: 'emily',
      content: 'Delicious flavors! Loved the variety of dishes.',
    },
    {
      name: 'Jack and Mary',
      rating: 5,
      img: 'jackAndMary',
      content: 'Exceptional dining experience. Every bite was perfection.',
    },
    {
      name: 'Sarah',
      rating: 3,
      img: 'sarah',
      content: 'Decent food, but service could be improved.',
    },
    {
      name: 'Michael',
      rating: 4,
      img: 'michael',
      content: 'Great ambiance and friendly staff. Tasty menu options.',
    },
  ],
};

describe('Testimonials component', () => {
  const expectedReviewCount = testimonials.content.length;

  test('renders Testimonials component', () => {
    render(<Testimonials testimonials={testimonials} />);
    const testimonialsSection = screen.getByTestId('testimonials-section');
    expect(testimonialsSection).toBeInTheDocument();

    const reviewElements = screen.getAllByTestId('review');
    expect(reviewElements).toHaveLength(expectedReviewCount);
  });

  test('renders correct number of testimonial reviews', () => {
    render(<Testimonials testimonials={testimonials} />);
    const reviewElements = screen.queryAllByTestId('review');
    expect(reviewElements).toHaveLength(expectedReviewCount);
  });

  test('displays testimonial names correctly', () => {
    render(<Testimonials testimonials={testimonials} />);
    const reviewElements = screen.queryAllByTestId('review');
    expect(reviewElements).toHaveLength(expectedReviewCount);

    testimonials.content.forEach((testimonial, index) => {
      const nameElement = within(reviewElements[index]).getByText(
        testimonial.name
      );
      expect(nameElement).toBeInTheDocument();
      expect(nameElement).toHaveTextContent(testimonial.name);
    });
  });
});
