import { render, screen } from '@testing-library/react';
import BookingPage from '../BookingPage';

describe('Booking page', () => {
  test('Renders Booking page', () => {
    render(<BookingPage />);
  });
  test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText('Reservations');
    expect(headingElement).toBeInTheDocument();
  });
});
