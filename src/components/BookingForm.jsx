import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormStep from './FormStep';
import FormStepLast from './FormStepLast';
import Privacy from './Privacy';

const BookingForm = ({ data, images, privacy }) => {
  const formik = useFormik({
    initialValues: {
      step: 0,
      seating: '',
      date: '',
      time: '',
      dinners: '',
      occasion: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: '',
      privacy: '',
    },
    onSubmit: () => {},
    validationSchema: Yup.object().shape({
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
      special: Yup.string(),
      privacy: Yup.boolean().required('Required'),
    }),
  });

  const nextStep = () => {
    formik.setFieldValue('step', formik.values.step + 1);
  };

  return (
    <form
      autocomplete='off'
      className='bookingForm'
      onSubmit={formik.handleSubmit}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
      <div className='formTopSection'>
        <div className='container'>
          <div className='row'>
            <div className='formTop'>
              <FormStep data={data[formik.values.step]} formik={formik} />
              {formik.values.step === data.length - 1 && (
                <>
                  <FormStepLast
                    data={data[formik.values.step - 1]}
                    formik={formik}
                  />
                  <Privacy privacy={privacy} formik={formik} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='formBottomSection'>
        <div className='container'>
          <div className='row'>
            <div className='formBottom'>
              <div className='imagesBlock'>
                {images.map(({ src, label }) => (
                  <div
                    key={label}
                    style={{ backgroundImage: `url(${src})` }}
                  ></div>
                ))}
              </div>
              {formik.values.step === data.length - 1 ? (
                <input
                  type='submit'
                  className='button'
                  value='Confirm Reservation'
                />
              ) : (
                <button className='button' onClick={nextStep}>
                  Reserve a table
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
