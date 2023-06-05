import React from 'react';
import { Link } from 'react-router-dom';

import restaurantFood from '../assets/restaurant-food.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <article className='container'>
        <div className='row'>
          <div className='heroText'>
            <h1>Little Lemon</h1>
            <h2>London</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              className='button'
              to='reservations'
              aria-label='Reserve a Table'
            >
              Reserve a Table
            </Link>
          </div>
          <div className='heroImages'>
            <picture>
              <img src={restaurantFood} alt='restaurant-food' />
            </picture>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
