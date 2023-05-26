import { render, screen } from '@testing-library/react';
import BookingPage, { initializeTimes, updateTimes } from '../BookingPage';

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

describe('initializeTimes', () => {
  it('should return an array of available times', () => {
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];

    const times = initializeTimes();

    expect(times).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  it('should return the same value as provided in the state', () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE', date: '2023-05-17' };

    const newTimes = updateTimes(state, action);

    expect(newTimes).toEqual(state);
  });
});
