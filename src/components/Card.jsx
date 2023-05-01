import React from 'react';

const Card = ({ highlight }) => {
  const { title, price, img, content } = highlight;

  return (
    <article className='card'>
      <img src={img} alt={title} />
      <div className='content'>
        <div className='specialTitle'>
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
        <p>{content}</p>
        <div className='iconDelivery'>
          <button>Order a Delivery </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
