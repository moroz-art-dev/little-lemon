import { BiError } from 'react-icons/bi';
import { Field, ErrorMessage, useFormikContext } from 'formik';

const Privacy = ({ privacy }) => {
  const { label, id, ...res } = privacy;
  const { errors, touched } = useFormikContext();

  const getClassNames = (id) =>
    `${'formCheckbox'} ${
      errors[id] && touched[id]
        ? 'error'
        : !errors[id] && touched[id]
        ? 'success'
        : ''
    }`.trim();

  return (
    <label htmlFor={id} className={getClassNames(id)}>
      <Field className='inputForm' name={id} id={id} {...res} />
      <span className='labelName'>{label}</span>
      <ErrorMessage name={id}>
        {(message) => (
          <span className='inputError'>
            <BiError />
            {message}
          </span>
        )}
      </ErrorMessage>
    </label>
  );
};

export default Privacy;
