import { Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import { FaStarOfLife } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';

const FormStep = ({ data, formik }) => {
  const getClassNames = (id, type) =>
    `${type === 'radio' ? 'formRadio' : 'formInput'} ${
      formik.errors[id] && formik.touched[id]
        ? 'error'
        : !formik.errors[id] && formik.touched[id]
        ? 'success'
        : ''
    }`.trim();

  return data.map(({ type, label, id, required, elements, icon, completed, ...rest }) => (
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
          onChange={(option) => formik.setFieldValue(id, option)}
          onBlur={() => formik.setFieldTouched(id, true)}
          {...rest}
          value={formik.values[id]}
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
  ));
};

export default FormStep;
