import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedBooking = ({ data }) => {
  const excludedProperties = ['step', 'privacy'];
  return (
    <article className='confirmedBooking'>
      <h2>You Reservation has been confirmed check your email</h2>
      {Object.keys(data)
        .filter(key => !excludedProperties.includes(key))
        .map((key, index) => (
          <p key={index}>
            <b>{key}</b> <i>{data[key]?.value || data[key]}</i>
          </p>
        ))}
    </article>
  );
};

ConfirmedBooking.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ConfirmedBooking;
