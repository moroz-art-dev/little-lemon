import React from 'react';

import restaurant from '../assets/restaurant.jpg';
import restaurantBoss from '../assets/restaurant-chef-b.jpg';

const About = () => {
  return (
    <section className='about'>
      <article className='container'>
        <div className='row'>
          <div className='aboutText'>
            <h2>Little Lemon</h2>
            <h3>London</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className='aboutImages'>
            <picture>
              <img src={restaurantBoss} alt='restaurant-food' />
            </picture>
            <picture>
              <img src={restaurant} alt='restaurant-food' />
            </picture>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
