import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import FormStep from './FormStep';
import FormStepLast from './FormStepLast';
import Privacy from './Privacy';

import '../styles/FormTopSection.css';

const FormTopSection = ({ formik, data, privacy, lastStep }) => {
  const formTopRef = useRef(null);
  return (
    <div className='formTopSection'>
      <div className='container'>
        <div className='row'>
          <h1>Reservations</h1>
          <CSSTransition
            key={JSON.stringify(formik.values.step)}
            in={true}
            appear={true}
            timeout={100}
            classNames='fade-in'
            nodeRef={formTopRef}
          >
            <div ref={formTopRef} className='formTop'>
              <FormStep data={data[formik.values.step]} />
              {formik.values?.step === lastStep && (
                <>
                  <FormStepLast data={data[formik.values.step - 1]} />
                  <Privacy privacy={privacy} />
                </>
              )}
            </div>
          </CSSTransition>
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
