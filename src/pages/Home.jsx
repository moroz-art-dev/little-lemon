import React from 'react';

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

export default Home;
