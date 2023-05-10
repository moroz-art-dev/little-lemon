import { BiError } from 'react-icons/bi';

const FormStepLast = ({ data, formik }) => {
  const prevStep = () => {
    formik.setFieldValue('step', formik.values.step - 1);
  };

  return (
    <div className='formSelected'>
      {data
        .filter(
          (obj, index, arr) => arr.findIndex((o) => o.id === obj.id) === index
        )
        .map(({ icon, id, placeholder, completed }) => (
          <div
            onClick={prevStep}
            key={placeholder}
            className={
              formik.values[id] ? 'selectedElement' : 'selectedElementError'
            }
          >
            {icon}
            {(typeof formik.values[id] === 'object' &&
              formik.values[id]['value']) ||
              formik.values[id] || (
                <div className='selectedError'>
                  <BiError />
                  {placeholder}
                </div>
              )}
            {!!formik.values[id] && completed}
          </div>
        ))}
    </div>
  );
};

export default FormStepLast;
