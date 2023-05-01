import React from 'react';

import Review from './Review';

const Testimonials = ({ testimonials }) => {
  return (
    <section className='testimonials'>
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
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
