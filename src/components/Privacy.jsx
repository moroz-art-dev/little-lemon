import { BiError } from 'react-icons/bi';
const Privacy = ({ privacy, formik }) => {
  const { label, id, ...res } = privacy;
  const labelClass = ['formCheckbox'];

  !!formik.errors[id] && formik.touched[id] && labelClass.push('error');
  !formik.errors[id] && formik.touched[id] && labelClass.push('success');

  return (
    <label htmlFor={id} className={labelClass.join(' ')}>
      <input className='inputForm' name={id} id={id} {...res} />
      <span className='labelName'>{label}</span>
      {!!formik.errors[id] && formik.touched[id] && (
        <span className='inputError'>
          <BiError />
          {formik.errors[id]}
        </span>
      )}
    </label>
  );
};

export default Privacy;
