import React from 'react';
import PropTypes from 'prop-types';
import { FaMotorcycle } from 'react-icons/fa';

const Card = ({ highlight }) => {
  const { title, price, img, content } = highlight;
  const styles = {
    backgroundImage: `url(${img})`,
  };

  return (
    <article className='card' data-testid='highlight-card'>
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
          <button aria-label='Order a Delivery'>
            Order a Delivery <FaMotorcycle data-testid='motorcycle-icon' />
          </button>
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  highlight: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
