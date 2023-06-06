import React from 'react';
import Review from './Review';

const Testimonials = ({ testimonials }) => {
  const { title, content } = testimonials;
  return (
    <section className='testimonials' data-testid='testimonials-section'>
      <div className='container'>
        <div className='row'>
          <div className='testimonialsReview'>
            <h2>{title}</h2>
            {content.map((review, index) => (
              <Review review={review} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
