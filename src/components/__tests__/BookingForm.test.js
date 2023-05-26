import { render, screen } from '@testing-library/react';
import BookingPage from '../../pages/BookingPage';
import BookingForm from '../BookingForm';

describe('BookingForm component', () => {
  test('Renders the BookingForm heading', () => {
    render(
      <BookingPage>
        <BookingForm />
      </BookingPage>
    );
    const headingElement = screen.getByText('Reservations');
    expect(headingElement).toBeInTheDocument();
  });
});
