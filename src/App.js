import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import salad from './assets/greek-salad.jpg';
import bruchetta from './assets/bruchetta.png';
import dessert from './assets/lemon-dessert.jpg';
import marioAdrianA from './assets/mario-and-adrian-a.jpg';
import marioAdrianB from './assets/mario-and-adrian-b.jpg';

import "./App.css";

function App() {
  const links = [
    { link: 'home', label: 'Home' },
    { link: 'about', label: 'About' },
    { link: 'menu', label: 'Menu' },
    { link: 'reservations', label: 'Reservations' },
    { link: 'online', label: 'Order Online' },
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
    { name: 'Mario and Adrian', rating: 5, img: marioAdrianA, content: 'Custom text' },
    { name: 'Mario and Adrian', rating: 4, img: marioAdrianA, content: 'Custom text' },
    { name: 'Mario and Adrian', rating: 5, img: marioAdrianB, content: 'Custom text' },
    { name: 'Mario and Adrian', rating: 3, img: marioAdrianB, content: 'Custom text' },
  ];

  return (
    <>
      <Header links={links}></Header>
      <Main testimonials={testimonials} highlights={highlights}></Main>
      <Footer links={links}></Footer>
    </>
  );
}

export default App;
