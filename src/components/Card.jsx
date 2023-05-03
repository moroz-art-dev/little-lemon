import React from 'react';

import { FaMotorcycle } from "react-icons/fa";

const Card = ({ highlight }) => {
  const { title, price, img, content } = highlight;
  const styles = {
    backgroundImage: `url(${img})`,
  };

  return (
    <article className='card'>
      <div className='cardImage' style={styles}></div>
      <div className='content'>
        <div className='contentTop'>
          <div className='cardTitle'>
            <h2>{title}</h2>
            <span>{price}</span>
          </div>
          <p>{content}</p>
        </div>
        <div className='cardDelivery'>
          <button>Order a Delivery <FaMotorcycle /></button>
        </div>
      </div>
    </article>
  );
};

export default Card;
