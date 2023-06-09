import React from 'react';
import PropTypes from 'prop-types';
import About from '../components/About';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';

const Home = ({ highlights, testimonials, heroContent, aboutContent }) => {
  return (
    <>
      <Hero heroContent={heroContent} />
      <Highlights highlights={highlights} />
      <Testimonials testimonials={testimonials} />
      <About aboutContent={aboutContent} />
    </>
  );
};

Home.propTypes = {
  testimonials: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  highlights: PropTypes.shape({
    title: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  heroContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
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

export default Home;
