import React from 'react';
import { Formik, Form } from 'formik';

import FormStep from './FormStep';
import FormStepLast from './FormStepLast';
import Privacy from './Privacy';

const BookingForm = ({
  data,
  images,
  privacy,
  initialValues,
  validationSchema,
}) => {
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
      {(formik) => {
        return (
          <Form autoComplete='off' className='bookingForm'>
            <div className='formTopSection'>
              <div className='container'>
                <div className='row'>
                  <div className='formTop'>
                    <FormStep data={data[formik.values.step]} />
                    {formik.values?.step === lastStep && (
                      <>
                        <FormStepLast data={data[formik.values.step - 1]} />
                        <Privacy privacy={privacy} />
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
        );
      }}
    </Formik>
  );
};

export default BookingForm;
