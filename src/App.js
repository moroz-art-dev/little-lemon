import React from 'react';
import * as FaIcons from 'react-icons/fa';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Routing from './components/Routing';
import ScrollToTopArrow from './components/ScrollToTopArrow';

import logoHeaderSrc from './assets/logo.svg';
import logoFooterSrc from './assets/logo-white.svg';
import salad from './assets/greek-salad.jpg';
import bruchetta from './assets/bruchetta.png';
import dessert from './assets/lemon-dessert.jpg';
import emily from './assets/emily.jpg';
import jackAndMary from './assets/jack_and_mary.jpg';
import sarah from './assets/sarah.jpg';
import michael from './assets/michael.jpg';
import restaurantFood from './assets/restaurant-food.jpg';
import restaurant from './assets/restaurant.jpg';
import restaurantBoss from './assets/restaurant-chef-b.jpg';
import './App.css';

function App() {
  const logoHeader = {
    src: '/',
    title: 'Logo',
    imgSrc: logoHeaderSrc,
    arialLabel: 'Home',
  };

  const logoFooter = {
    src: '/',
    title: 'Logo',
    imgSrc: logoFooterSrc,
  };

  const menu = {
    title: 'Links',
    links: [
      { link: '/', label: 'Home', scroll: false },
      { link: 'menu', label: 'Menu', scroll: true },
      { link: 'testimonials', label: 'Reviews', scroll: true },
      { link: 'about', label: 'About', scroll: true },
      { link: 'reservations', label: 'Reservations', scroll: false },
    ],
  };

  const socialMenu = {
    title: 'Social Media Links',
    content: [
      {
        label: 'Facebook',
        link: 'https://facebook.com',
        icon: <FaIcons.FaFacebook />,
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com',
        icon: <FaIcons.FaTwitter />,
      },
      {
        label: 'Instagram',
        link: 'https://instagram.com',
        icon: <FaIcons.FaInstagram />,
      },
    ],
  };

  const contacts = {
    title: 'Contacts',
    iconAddress: <FaIcons.FaAddressBook />,
    content: ['123 Main St.', 'Town, USA 12345'],
    iconPhone: <FaIcons.FaPhone />,
    phone: '+1-800-123-4567',
    tel: 'tel:+18001234567',
    mail: 'info@example.com',
  };

  const highlights = {
    title: 'This weeks specials!',
    buttonLabel: 'Online Menu',
    content: [
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
    ],
  };

  const testimonials = {
    title: 'Testimonials',
    content: [
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
    ],
  };

  const heroContent = {
    title: 'Little Lemon',
    location: 'London',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Reserve a Table',
    imageSrc: restaurantFood,
    imageAlt: 'restaurant-food',
  };

  const aboutContent = {
    title: 'Little Lemon',
    location: 'London',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    imageSrc1: restaurantBoss,
    imageAlt1: 'restaurant-chef-b',
    imageSrc2: restaurant,
    imageAlt2: 'restaurant',
  };

  return (
    <>
      <Header menu={menu} logoHeader={logoHeader}></Header>
      <Main>
        <Routing
          testimonials={testimonials}
          highlights={highlights}
          heroContent={heroContent}
          aboutContent={aboutContent}
        />
      </Main>
      <Footer
        menu={menu}
        socialMenu={socialMenu}
        contacts={contacts}
        logoFooter={logoFooter}
      ></Footer>
      <ScrollToTopArrow />
    </>
  );
}

export default App;
