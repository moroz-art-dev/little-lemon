import React from 'react';
import Review from './Review';

const Testimonials = ({ testimonials }) => {
  return (
    <section className='testimonials' data-testid='testimonials-section'>
      <div className='container'>
        <div className='row'>
          <div className='testimonialsReview'>
            <h2>Testimonials</h2>
            {testimonials.map((review, index) => (
              <Review review={review} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
