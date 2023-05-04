import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { IoIosArrowDown/*, IoIosArrowUp*/ } from 'react-icons/io';

const BookingForm = ({ data }) => {
  const formik = useFormik({
    initialValues: {
      step: false,
      seating: '',
      date: '',
      time: '',
      dinners: 1,
      occasion: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: '',
    },
    onSubmit: () => {},
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string()
        .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
        .required('Required'),
    }),
  });

  return (
    <form
      className='bookingForm'
      onSubmit={formik.handleSubmit}
      onChange={formik.handleChange}
    >
      <div className='formTopSection'>
        <div className='container'>
          <div className='row'>
            <div className='formTop'>
              {data.map(({ type, label, id, elements, ...rest }) => (
                <label key={label} htmlFor={id}>
                  {label}
                  {type === 'select' ? (
                    <>
                      {<IoIosArrowDown />}
                      <select id={id} name={id}>
                        {elements.map(({ name, ...all }) => (
                          <option key={name} {...all}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : type === 'textarea' ? (
                    <textarea id={id} name={id} {...rest}></textarea>
                  ) : (
                    <input type={type} id={id} name={id} {...rest} />
                  )}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='formBottomSection'>
        <div className='container'>
          <div className='row'>
            <div className='formBottom'>
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
