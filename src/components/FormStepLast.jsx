import React from 'react';
import PropTypes from 'prop-types';
import { BiError } from 'react-icons/bi';
import { useFormikContext } from 'formik';

const FormStepLast = ({ data }) => {
  const { values, setFieldValue } = useFormikContext();

  const prevStep = () => {
    setFieldValue('step', values.step - 1);
  };

  return (
    <div className='formSelected'>
      {data
        .filter(
          (obj, index, arr) => arr.findIndex(o => o.id === obj.id) === index
        )
        .map(({ icon, id, placeholder, completed }) => (
          <div
            onClick={prevStep}
            key={placeholder}
            className={values[id] ? 'selectedElement' : 'selectedElementError'}
          >
            {icon}
            {(typeof values[id] === 'object' && values[id]['value']) ||
              values[id] || (
                <div className='selectedError'>
                  <BiError />
                  {placeholder}
                </div>
              )}
            {!!values[id] && completed}
          </div>
        ))}
    </div>
  );
};

FormStepLast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      id: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      completed: PropTypes.string,
    })
  ).isRequired,
};

export default FormStepLast;
