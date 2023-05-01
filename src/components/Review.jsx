import React from 'react';

const Review = ({ review }) => {
  const { rating, name, img, content } = review;

  return (
    <article className='review'>
      <span>{rating}</span>
      <div className='reviewImg'>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </div>
      <p>{content}</p>
    </article>
  );
};

export default Review;
