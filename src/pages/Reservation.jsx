import About from '../components/About';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';

const Reservation = ({ highlights, testimonials }) => {
  return (
    <>
      <Hero />
      <Highlights highlights={highlights} />
      <Testimonials testimonials={testimonials} />
      <About />
    </>
  );
};

export default Reservation;
