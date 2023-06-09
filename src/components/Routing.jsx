import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
import Order from '../pages/Order';
import Login from '../pages/Login';

const Routing = ({ testimonials, highlights, heroContent, aboutContent }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home
            testimonials={testimonials}
            highlights={highlights}
            heroContent={heroContent}
            aboutContent={aboutContent}
          />
        }
      />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservations' element={<BookingPage />} />
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

Routing.propTypes = {
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

export default Routing;
