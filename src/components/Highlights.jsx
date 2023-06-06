import React from 'react';
import Card from './Card';

const Highlights = ({ highlights }) => {
  const { content, title, buttonLabel } = highlights;
  return (
    <section className='highlights' data-testid='highlights-section'>
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

export default Highlights;
