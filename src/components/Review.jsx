import React from 'react';
import Stars from './Stars';

const Review = ({ review }) => {
  const { rating, name, img, content } = review;

  return (
    <article className='review'>
      <Stars rating={rating} />
      <div className='reviewImg'>
        <picture>
          <img src={img} alt={name} />
        </picture>
        <h3>{name}</h3>
      </div>
      <p>{content}</p>
    </article>
  );
};

export default Review;
