import React from 'react';
import PropTypes from 'prop-types';

const About = ({
  aboutContent: {
    title,
    location,
    description,
    imageSrc1,
    imageAlt1,
    imageSrc2,
    imageAlt2,
  },
}) => {
  return (
    <section id='about-section' className='about'>
      <article className='container'>
        <div className='row'>
          <div className='aboutText'>
            <h2>{title}</h2>
            <h3>{location}</h3>
            <p>{description}</p>
          </div>
          <div className='aboutImages'>
            <picture>
              <img src={imageSrc1} alt={imageAlt1} />
            </picture>
            <picture>
              <img src={imageSrc2} alt={imageAlt2} />
            </picture>
          </div>
        </div>
      </article>
    </section>
  );
};

About.propTypes = {
  aboutContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc1: PropTypes.string.isRequired,
    imageAlt1: PropTypes.string.isRequired,
    imageSrc2: PropTypes.string.isRequired,
    imageAlt2: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
