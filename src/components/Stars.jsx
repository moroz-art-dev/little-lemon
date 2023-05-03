import React from 'react';

import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

const Stars = ({ rating }) => {
  const fullStars = Math.min(Math.max(Math.round(rating), 0), 5);

  return (
    <div className='stars'>
      {[...Array(fullStars)].map((e, i) => (
        <span key={i}>
          <RiStarSFill />
        </span>
      ))}
      {[...Array(5 - fullStars)].map((e, i) => (
        <span key={i + fullStars}>
          <RiStarSLine />
        </span>
      ))}
    </div>
  );
};

export default Stars;
