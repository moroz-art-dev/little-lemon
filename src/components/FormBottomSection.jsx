import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

const FormBottomSection = ({ formik, images, lastStep }) => {
  const { setFieldValue } = useFormikContext();

  const nextStep = ({ values }) => {
    setFieldValue('step', values.step + 1);
  };

  return (
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
                aria-label='Reserve a table'
              >
                Reserve a table
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FormBottomSection.propTypes = {
  formik: PropTypes.object.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  lastStep: PropTypes.number.isRequired,
};

export default FormBottomSection;
