import React from 'react';

import About from './About';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';

const Main = ({highlights, testimonials}) => {
  return (
    <main className='main'>
      <Hero />
      <Highlights highlights={highlights} />
      <Testimonials testimonials={testimonials} />
      <About />
    </main>
  );
};

export default Main;
