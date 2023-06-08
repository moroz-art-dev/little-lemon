import React from 'react';
import PropTypes from 'prop-types';
import FormStep from './FormStep';
import FormStepLast from './FormStepLast';
import Privacy from './Privacy';

const FormTopSection = ({ formik, data, privacy, lastStep }) => {
  return (
    <div className='formTopSection'>
      <div className='container'>
        <div className='row'>
          <h1>Reservations</h1>
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
  );
};

FormTopSection.propTypes = {
  formik: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  privacy: PropTypes.object.isRequired,
  lastStep: PropTypes.number.isRequired,
};

export default FormTopSection;
