import React from 'react';
import { Formik, Form } from 'formik';

import * as Yup from 'yup';

import FormStep from './FormStep';
import FormStepLast from './FormStepLast';
import Privacy from './Privacy';

const BookingForm = ({ data, images, privacy }) => {
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

  const handleSubmit = (values, { setSubmitting }) =>
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);

  const nextStep = ({ setFieldValue, values }) =>
    setFieldValue('step', values?.step + 1);

  const lastStep = data.length - 1;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form autoComplete='off' className='bookingForm'>
          <div className='formTopSection'>
            <div className='container'>
              <div className='row'>
                <div className='formTop'>
                  <FormStep data={data[formik.values.step]} formik={formik} />
                  {formik.values?.step === lastStep && (
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
                  {formik.values.step === lastStep ? (
                    <input
                      type='submit'
                      className='button'
                      value='Confirm Reservation'
                      disabled={formik.isSubmitting}
                    />
                  ) : (
                    <button
                      className='button'
                      type='button'
                      onClick={() => nextStep(formik)}
                      disabled={formik.isSubmitting}
                    >
                      Reserve a table
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
