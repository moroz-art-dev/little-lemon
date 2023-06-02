import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Routing from './components/Routing';

import salad from './assets/greek-salad.jpg';
import bruchetta from './assets/bruchetta.png';
import dessert from './assets/lemon-dessert.jpg';
import emily from './assets/emily.jpg';
import jackAndMary from './assets/jack_and_mary.jpg';
import sarah from './assets/sarah.jpg';
import michael from './assets/michael.jpg';

import './App.css';

function App() {
  const links = [
    { link: '/', label: 'Home' },
    { link: 'about', label: 'About' },
    { link: 'menu', label: 'Menu' },
    { link: 'reservations', label: 'Reservations' },
    { link: 'order', label: 'Order Online' },
    { link: 'login', label: 'Login' },
  ];

  const highlights = [
    {
      title: 'Greek Salad',
      price: '$12.99',
      img: salad,
      content:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      title: 'Bruchetta',
      price: '$5.99',
      img: bruchetta,
      content:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    },
    {
      title: 'Lemon Dessert',
      price: '$5.00',
      img: dessert,
      content:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];

  const testimonials = [
    {
      name: 'Emily',
      rating: 4,
      img: emily,
      content: 'Delicious flavors! Loved the variety of dishes.',
    },
    {
      name: 'Jack and Mary',
      rating: 5,
      img: jackAndMary,
      content: 'Exceptional dining experience. Every bite was perfection.',
    },
    {
      name: 'Sarah',
      rating: 3,
      img: sarah,
      content: 'Decent food, but service could be improved.',
    },
    {
      name: 'Michael',
      rating: 4,
      img: michael,
      content: 'Great ambiance and friendly staff. Tasty menu options.',
    },
  ];

  return (
    <>
      <Header links={links}></Header>
      <Main>
        <Routing testimonials={testimonials} highlights={highlights} />
      </Main>
      <Footer links={links}></Footer>
    </>
  );
}

export default App;
