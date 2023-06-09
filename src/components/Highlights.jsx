import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Highlights = ({ highlights }) => {
  const { content, title, buttonLabel } = highlights;
  return (
    <section
      id='menu-section'
      className='highlights'
      data-testid='highlights-section'
    >
      <div className='container'>
        <div className='row'>
          <div className='highlightsTitle'>
            <h2>{title}</h2>
            <button className='button' aria-label={buttonLabel}>
              {buttonLabel}
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='highlightsCards'>
            {content.map((highlight, index) => (
              <Card
                highlight={highlight}
                key={index}
                data-testid='highlight-card'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Highlights.propTypes = {
  highlights: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default Highlights;
