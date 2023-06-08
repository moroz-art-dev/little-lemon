import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Hero = ({
  heroContent: {
    title,
    location,
    description,
    buttonLabel,
    imageSrc,
    imageAlt,
  },
}) => {
  return (
    <section className='hero'>
      <article className='container'>
        <div className='row'>
          <div className='heroText'>
            <h1>{title}</h1>
            <h2>{location}</h2>
            <p>{description}</p>
            <Link className='button' to='reservations' aria-label={buttonLabel}>
              {buttonLabel}
            </Link>
          </div>
          <div className='heroImages'>
            <picture>
              <img src={imageSrc} alt={imageAlt} />
            </picture>
          </div>
        </div>
      </article>
    </section>
  );
};

Hero.propTypes = {
  heroContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
