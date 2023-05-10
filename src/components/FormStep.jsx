import Select from 'react-select';
import { FaStarOfLife } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';

const FormStep = ({ data, formik }) => {
  return data.map(({ type, label, id, required, elements, ...rest }) => {
    const labelClass = [type === 'radio' ? 'formRadio' : 'formInput'];

    !!formik.errors[id] && formik.touched[id] && labelClass.push('error');
    !formik.errors[id] && formik.touched[id] && labelClass.push('success');

    return (
      <label key={label} htmlFor={id} className={labelClass.join(' ')}>
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
            onBlur={(id) => formik.setFieldTouched(id, true)}
            value={formik.values[id]}
            {...rest}
          />
        ) : type === 'textarea' ? (
          <textarea id={id} name={id} {...rest}></textarea>
        ) : type === 'radio' ? (
          <input
            className='inputForm'
            type={type}
            name={id}
            id={id}
            checked={formik.values[id] === rest.value}
            onChange={(e) => formik.setFieldValue(id, e.target.value)}
            {...rest}
          />
        ) : (
          <input
            className='inputForm'
            type={type}
            name={id}
            id={id}
            defaultValue={formik.values[id]}
            onChange={(e) => formik.setFieldValue(id, e.target.value)}
            {...rest}
          />
        )}
        {!!formik.errors[id] && formik.touched[id] && (
          <span className='inputError'>
            <BiError />
            {formik.errors[id]}
          </span>
        )}
      </label>
    );
  });
};

export default FormStep;
