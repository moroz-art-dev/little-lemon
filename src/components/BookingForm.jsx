import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

import ConfirmedBooking from './ConfirmedBooking';
import FormTopSection from './FormTopSection';
import FormBottomSection from './FormBottomSection';

import { submitAPI } from '../services/api';

const BookingForm = ({
  data,
  images,
  privacy,
  initialValues,
  validationSchema,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await submitAPI(values);
      if (response) {
        setBookingData(values);
        setIsOpen(true);
        resetForm();
      } else {
        console.error('Error sending data');
      }
    } catch (error) {
      console.error('An error has occurred', error);
    }
    setSubmitting(false);
  };

  const lastStep = data.length - 1;

  const closeModal = () => {
    setIsOpen(false);
    setBookingData(null);
    navigate("/");
  };

  Modal.setAppElement('#root');

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form autoComplete='off' className='bookingForm'>
            <FormTopSection
              formik={formik}
              data={data}
              privacy={privacy}
              lastStep={lastStep}
            />
            <FormBottomSection
              images={images}
              formik={formik}
              lastStep={lastStep}
            />
            <Modal
              className='bookingModal'
              overlayClassName='bookingOverlay'
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel='Content Modal'
            >
              {bookingData && <ConfirmedBooking data={bookingData} />}
            </Modal>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BookingForm;
