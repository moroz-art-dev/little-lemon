import { useEffect, useContext } from 'react';

import { useFormikContext, Field, ErrorMessage } from 'formik';
import Select from 'react-select';

import BookingFormContext from './BookingFormContext';

import { FaStarOfLife } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';

const FormStep = ({ data }) => {
  const { dispatch } = useContext(BookingFormContext);

  const { errors, touched, values, setFieldValue, setFieldTouched } =
    useFormikContext();

  const getClassNames = (id, type) =>
    `${type === 'radio' ? 'formRadio' : 'formInput'} ${
      errors[id] && touched[id]
        ? 'error'
        : !errors[id] && touched[id]
        ? 'success'
        : ''
    }`.trim();

  useEffect(() => {
    if (values.date !== '') dispatch({ type: 'UPDATE', date: values.date });
  }, [dispatch, values?.date]);

  useEffect(() => {
    if (values.time !== '') {
      const newTime = data.find((element) => element.id === 'time').elements;
      console.log(values?.time, newTime);
      !newTime.some(
        (value) => JSON.stringify(value) === JSON.stringify(values?.time)
      ) && setFieldValue('time', newTime[0]);
    }
  }, [data, values?.time, setFieldValue]);

  return data.map(
    ({ type, label, id, required, elements, icon, completed, ...rest }) => (
      <label key={label} htmlFor={id} className={getClassNames(id, type)}>
        <span className='labelName'>
          {required && <FaStarOfLife />}
          {label}
        </span>
        {type === 'select' ? (
          <Select
            className='reactSelectContainer'
            classNamePrefix='reactSelect'
            inputId={id}
            options={elements}
            name={id}
            id={id}
            onChange={(option) => setFieldValue(id, option)}
            onBlur={() => setFieldTouched(id, true)}
            {...rest}
            value={values[id]}
          />
        ) : (
          <Field
            className='inputForm'
            as={type === 'textarea' ? type : 'input'}
            type={type}
            name={id}
            id={id}
            {...rest}
          />
        )}
        <ErrorMessage name={id}>
          {(message) => (
            <span className='inputError'>
              <BiError />
              {message}
            </span>
          )}
        </ErrorMessage>
      </label>
    )
  );
};

export default FormStep;
