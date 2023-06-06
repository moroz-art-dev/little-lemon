import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../../App';
import Home from '../Home';
import About from '../../components/About';
import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';
import Testimonials from '../../components/Testimonials';

const heroContent = {
  title: 'Little Lemon',
  location: 'London',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonLabel: 'Reserve a Table',
  imageSrc: 'restaurantFood',
  imageAlt: 'restaurant-food',
};

const aboutContent = {
  title: 'Little Lemon',
  location: 'London',
  description:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  imageSrc1: 'restaurantBoss',
  imageAlt1: 'restaurant-chef-b',
  imageSrc2: 'restaurant',
  imageAlt2: 'restaurant',
};

const highlights = {
  title: 'This weeks specials!',
  buttonLabel: 'Online Menu',
  content: [
    {
      title: 'Greek Salad',
      price: '$12.99',
      content:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
  ],
};

const testimonials = {
  title: 'Testimonials',
  content: [
    {
      name: 'Emily',
      rating: 4,
      img: 'emily',
      content: 'Delicious flavors! Loved the variety of dishes.',
    },
  ],
};

describe('Home page', () => {
  test('Renders Home page', () => {
    render(
      <BrowserRouter>
        <App>
          <Home
            highlights={highlights}
            testimonials={testimonials}
            heroContent={heroContent}
            aboutContent={aboutContent}
          />
        </App>
      </BrowserRouter>
    );
  });

  test('Renders Hero component', () => {
    render(
      <BrowserRouter>
        <Hero heroContent={heroContent} />
      </BrowserRouter>
    );
  });

  test('Renders Highlights component', () => {
    render(
      <BrowserRouter>
        <Highlights highlights={highlights} />
      </BrowserRouter>
    );
  });

  test('Renders Testimonials component', () => {
    render(
      <BrowserRouter>
        <Testimonials testimonials={testimonials} />
      </BrowserRouter>
    );
  });

  test('Renders About component', () => {
    render(
      <BrowserRouter>
        <About aboutContent={aboutContent} />
      </BrowserRouter>
    );
  });
});
