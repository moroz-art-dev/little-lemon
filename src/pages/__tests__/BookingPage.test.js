import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from '@jest/globals';
import BookingPage from '../BookingPage';

describe('Booking page', () => {
  test('Renders Booking page', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
  });

  test('Renders the BookingForm heading', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const headingElement = screen.getByText('Reservations');
    expect(headingElement).toBeInTheDocument();
  });
});
