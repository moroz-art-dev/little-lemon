import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../../App';
import Home from '../Home';
import About from '../../components/About';
import Hero from '../../components/Hero';
import Highlights from '../../components/Highlights';
import Testimonials from '../../components/Testimonials';

describe('Home page', () => {
  const highlights = [
    {
      title: 'Greek Salad',
      price: '$12.99',
      img: 'salad.jpg',
      content:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      rating: 5,
      content: 'This is a great restaurant!',
    },
  ];

  test('Renders Home page', () => {
    render(
      <BrowserRouter>
        <App>
          <Home highlights={highlights} testimonials={testimonials} />
        </App>
      </BrowserRouter>
    );
  });

  test('Renders Hero component', () => {
    render(
      <BrowserRouter>
        <Hero />
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
        <About />
      </BrowserRouter>
    );
  });
});
