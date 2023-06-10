import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from '@jest/globals';
import * as Yup from 'yup';
import BookingPage from '../../pages/BookingPage';
import BookingForm from '../BookingForm';

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

const data = [
  [
    {
      type: 'date',
      id: 'date',
      label: 'Date',
      required: true,
      placeholder: 'Select Date',
      icon: {},
    },
  ],
];

const images = [
  { src: 'salad', label: 'image1' },
  { src: 'bruchetta', label: 'image2' },
  { src: 'dessert', label: 'image3' },
];

const privacy = {
  type: 'checkbox',
  id: 'privacy',
  label: 'You agree to our friendly privacy policy',
  required: true,
  placeholder: 'Change seating',
};

const validationSchema = Yup.object({
  seating: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  time: Yup.object().required('Required'),
  diners: Yup.number()
    .min(1, 'At least one diner is required')
    .max(10, 'Maximum 10 diners allowed')
    .required('Required'),
  occasion: Yup.object().required('Required'),
  firstName: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters required'),
  lastName: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
    .required('Required'),
  specialRequests: Yup.string(),
  privacy: Yup.boolean().required('Required'),
});

describe('BookingForm component', () => {
  test('Renders the BookingForm heading', () => {
    render(
      <BrowserRouter>
        <BookingPage>
          <BookingForm
            data={data}
            images={images}
            privacy={privacy}
            initialValues={initialValues}
            validationSchema={validationSchema}
          />
        </BookingPage>
      </BrowserRouter>
    );
    const headingElement = screen.getByText('Reservations');
    expect(headingElement).toBeInTheDocument();
  });
});
