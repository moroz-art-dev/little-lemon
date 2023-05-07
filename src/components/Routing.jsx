import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
import Order from '../pages/Order';
import Login from '../pages/Login';

const Routing = ({ testimonials, highlights }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home testimonials={testimonials} highlights={highlights} />}
      />
      <Route
        path='/about'
        element={
          <AboutPage testimonials={testimonials} highlights={highlights} />
        }
      />
      <Route
        path='/menu'
        element={<Menu testimonials={testimonials} highlights={highlights} />}
      />
      <Route
        path='/reservations'
        element={
          <BookingPage testimonials={testimonials} highlights={highlights} />
        }
      />
      <Route
        path='/order'
        element={<Order testimonials={testimonials} highlights={highlights} />}
      />
      <Route
        path='/login'
        element={<Login testimonials={testimonials} highlights={highlights} />}
      />
    </Routes>
  );
};

export default Routing;
