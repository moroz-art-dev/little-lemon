import { render, screen } from '@testing-library/react';
import Highlights from '../Highlights';

describe('Highlights component', () => {
  const highlights = [
    {
      title: 'Greek Salad',
      price: '$12.99',
    },
    {
      title: 'Bruchetta',
      price: '$5.99',
    },
    {
      title: 'Lemon Dessert',
      price: '$5.00',
    },
  ];

  it('Should render the highlights section', () => {
    render(<Highlights highlights={highlights} />);
    const sectionElement = screen.getByTestId('highlights-section');
    expect(sectionElement).toBeInTheDocument();
  });

  it('Should render the correct number of highlight cards', () => {
    render(<Highlights highlights={highlights} />);
    const cardElements = screen.getAllByTestId('highlight-card');
    expect(cardElements).toHaveLength(highlights.length);
  });

  it('Should render the correct information for each highlight card', () => {
    render(<Highlights highlights={highlights} />);
    highlights.forEach((highlight) => {
      const titleElement = screen.getByText(highlight.title);
      const priceElement = screen.getByText(highlight.price);

      expect(titleElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
    });
  });
});
