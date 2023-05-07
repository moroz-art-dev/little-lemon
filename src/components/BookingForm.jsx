import React from 'react';
import Select from 'react-select';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BiError } from 'react-icons/bi';
import { FaStarOfLife } from 'react-icons/fa';

const BookingForm = ({ data, images }) => {
  const formik = useFormik({
    initialValues: {
      step: false,
      seating: '',
      date: '',
      time: '',
      dinners: '',
      occasion: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: '',
    },
    onSubmit: () => {},
    validationSchema: Yup.object().shape({
      seating: Yup.string().required('Required'),
      date: Yup.date().required('Required'),
      time: Yup.object().required('Required'),
      dinners: Yup.number()
        .min(1, 'At least one dinner is required')
        .max(10, 'Maximum 10 dinners allowed')
        .required('Required'),
      occasion: Yup.object().required('Required'),
      firstName: Yup.string()
        .required('Required')
        .min(3, 'Minimum 3 characters required'),
      lastName: Yup.string()
        .required('Required')
        .min(3, 'Minimum 3 characters required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string()
        .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
        .required('Required'),
      special: Yup.string(),
    }),
  });

  const handleSelectChange = (selectedOption, { action, name }) => {
    formik.setFieldValue(name, selectedOption);
  };

  const handleSelectBlur = (id) => {
    formik.setFieldTouched(id, true);
  };

  return (
    <form
      className='bookingForm'
      onSubmit={formik.handleSubmit}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
      <div className='formTopSection'>
        <div className='container'>
          <div className='row'>
            <div className='formTop'>
              {data.map(({ type, label, id, required, elements, ...rest }) => {
                const labelClass = [
                  type === 'radio' ? 'formRadio' : 'formInput',
                ];
                !!formik.errors[id] &&
                  formik.touched[id] &&
                  labelClass.push('error');
                !formik.errors[id] &&
                  formik.touched[id] &&
                  labelClass.push('success');
                return (
                  <label
                    key={label}
                    htmlFor={id}
                    className={labelClass.join(' ')}
                  >
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
                        id={id}
                        onChange={handleSelectChange}
                        onBlur={handleSelectBlur}
                        {...rest}
                      />
                    ) : type === 'textarea' ? (
                      <textarea id={id} {...rest}></textarea>
                    ) : (
                      <input
                        className='inputForm'
                        type={type}
                        id={id}
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
              })}
            </div>
          </div>
        </div>
      </div>
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
              <input
                type='submit'
                className='button'
                value='Make Your reservation'
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
