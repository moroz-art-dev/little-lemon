import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from '../../pages/BookingPage';
import BookingForm from '../BookingForm';

describe('BookingForm component', () => {
  test('Renders the BookingForm heading', () => {
    render(
      <BrowserRouter>
        <BookingPage>
          <BookingForm />
        </BookingPage>
      </BrowserRouter>
    );
    const headingElement = screen.getByText('Reservations');
    expect(headingElement).toBeInTheDocument();
  });
});
