import React from 'react';
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

export default Routing;
