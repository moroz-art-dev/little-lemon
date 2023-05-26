import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import Privacy from '../Privacy';

describe('Privacy component', () => {
  const initialValues = {
    step: 0,
    seating: '',
    date: '',
    time: '',
    diners: '',
    occasion: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    privacy: false,
  };

  const privacy = {
    type: 'checkbox',
    id: 'privacy',
    label: 'You agree to our friendly privacy policy',
    required: true,
    placeholder: 'Change seating',
  };

  test('renders label and checkbox with correct text and attributes', () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Privacy privacy={privacy} />
      </Formik>
    );

    const checkbox = screen.getByRole('checkbox', { name: privacy.label });

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('id', privacy.id);
    expect(checkbox).toHaveAttribute('name', privacy.id);
    expect(checkbox).toHaveAttribute('required');
  });
});
