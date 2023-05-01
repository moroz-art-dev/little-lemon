import React from 'react';

import restaurant from '../assets/restaurant.jpg';
import restaurantBoss from '../assets/restaurant-chef-b.jpg';

const About = () => {
  return (
    <section className='about'>
      <article className='container'>
        <div className='row'>
          <div className='col-4'>
            <h1>Little Lemon</h1>
            <h2>London</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className='col-4'>
            <img src={restaurantBoss} alt='restaurant-food' />
            <img src={restaurant} alt='restaurant-food' />
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
