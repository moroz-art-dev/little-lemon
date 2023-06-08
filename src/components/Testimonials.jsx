import React from 'react';
import PropTypes from 'prop-types';
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

Testimonials.propTypes = {
  testimonials: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Testimonials;
