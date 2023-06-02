import React, { useReducer, useState, useEffect } from 'react';

import { BiTime } from 'react-icons/bi';
import { FaCalendar, FaGlassCheers } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

import BookingForm from '../components/BookingForm';
import BookingFormContext from '../components/BookingFormContext';

import { fetchAPI } from '../services/api';

import salad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.png';
import dessert from '../assets/lemon-dessert.jpg';

import * as Yup from 'yup';

const BookingPage = () => {
  const [initializeTimes, setInitializeTimes] = useState([]);

  const updateTimes = (state, { type, date }) => {
    switch (type) {
      case 'INITIAL': {
        return initializeTimes;
      }
      case 'UPDATE': {
        return date;
      }
      default:
        throw new Error();
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      const today = new Date();
      try {
        const times = fetchAPI(today);
        setInitializeTimes(times);
        dispatch({ type: 'INITIAL' });
      } catch (error) {
        console.error('Error fetching available times:', error);
      }
    };

    fetchAvailableTimes();
  }, []);

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

  const images = [
    { src: salad, label: 'image1' },
    { src: bruchetta, label: 'image2' },
    { src: dessert, label: 'image3' },
  ];

  const data = [
    [
      {
        type: 'date',
        id: 'date',
        label: 'Date',
        required: true,
        placeholder: 'Select Date',
        icon: <FaCalendar />,
      },
      {
        type: 'select',
        id: 'time',
        label: 'Time',
        elements: availableTimes.map((time) => ({
          label: time,
          value: time,
        })),
        required: true,
        placeholder: 'Select Time',
        icon: <BiTime />,
      },
      {
        type: 'number',
        id: 'diners',
        label: 'Number of diners',
        completed: ' Diners',
        min: 1,
        max: 10,
        required: true,
        placeholder: 'Change Diners',
        icon: <BsPerson />,
      },
      {
        type: 'select',
        id: 'occasion',
        label: 'Occasion',
        elements: [
          { label: 'Birthday', value: 'birthday' },
          { label: 'Anniversary', value: 'anniversary' },
        ],
        required: true,
        placeholder: 'Select Occasion',
        icon: <FaGlassCheers />,
      },
      {
        type: 'radio',
        id: 'seating',
        label: 'Indoor seating',
        required: true,
        placeholder: 'Change seating',
        index: 'last',
        value: 'Indoor seating',
      },
      {
        type: 'radio',
        id: 'seating',
        label: 'Outdoor seating',
        required: true,
        placeholder: 'Change seating',
        index: 'last',
        value: 'Outdoor seating',
      },
    ],
    [
      {
        type: 'text',
        id: 'firstName',
        label: 'First name',
        required: true,
        placeholder: 'First name',
      },
      {
        type: 'text',
        id: 'lastName',
        label: 'Last name',
        required: true,
        placeholder: 'Last name',
      },
      {
        type: 'email',
        id: 'email',
        label: 'Email',
        required: true,
        placeholder: 'you@company.com',
      },
      {
        type: 'tel',
        id: 'phone',
        label: 'Phone number',
        required: true,
        placeholder: 'Enter Phone number',
      },
      {
        type: 'textarea',
        id: 'specialRequests',
        label: 'Special Requests',
        placeholder: 'Comment',
      },
    ],
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

  return (
    <section className='bookingPage'>
      <BookingFormContext.Provider value={{ dispatch }}>
        <BookingForm
          initialValues={initialValues}
          data={data}
          images={images}
          privacy={privacy}
          validationSchema={validationSchema}
        />
      </BookingFormContext.Provider>
    </section>
  );
};

export default BookingPage;
