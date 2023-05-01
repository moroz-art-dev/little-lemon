import React from 'react';

import restaurantFood from '../assets/restaurant-food.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <article className='container'>
        <div className='row'>
          <div className='col-4'>
            <h1>Little Lemon</h1>
            <h2>London</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='button'>Reserve a Table</button>
          </div>
          <div className='col-4'>
            <img src={restaurantFood} alt='restaurant-food' />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
