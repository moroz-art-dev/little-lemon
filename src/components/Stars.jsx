import React from 'react';
import PropTypes from 'prop-types';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

const Stars = ({ rating }) => {
  const fullStars = Math.min(Math.max(Math.round(rating), 0), 5);

  return (
    <div className='stars' data-testid='stars-container'>
      {[...Array(fullStars)].map((e, i) => (
        <span key={i} data-testid='star-filled'>
          <RiStarSFill />
        </span>
      ))}
      {[...Array(5 - fullStars)].map((e, i) => (
        <span key={i + fullStars} data-testid='star-empty'>
          <RiStarSLine />
        </span>
      ))}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
