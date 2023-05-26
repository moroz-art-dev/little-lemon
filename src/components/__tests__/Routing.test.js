import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Routing from '../Routing';

describe('Routing component', () => {
  test('renders Home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routing testimonials={[]} highlights={[]} />
      </MemoryRouter>
    );

    const homeElements = screen.getAllByText('Little Lemon');
    expect(homeElements.length).toBeGreaterThan(0);
  });

  test('renders Reservations page', () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <Routing testimonials={[]} highlights={[]} />
      </MemoryRouter>
    );

    const reservationsElement = screen.getByText('Reservations');
    expect(reservationsElement).toBeInTheDocument();
  });
});
