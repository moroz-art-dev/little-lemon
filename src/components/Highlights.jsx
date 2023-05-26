import React from 'react';
import Card from './Card';

const Highlights = ({ highlights }) => {
  return (
    <section className='highlights' data-testid="highlights-section">
      <div className='container'>
        <div className='row'>
          <div className='highlightsTitle'>
            <h2>This weeks specials!</h2>
            <button className='button'>Online Menu</button>
          </div>
        </div>
        <div className='row'>
          <div className='highlightsCards'>
            {highlights.map((highlight, index) => (
              <Card highlight={highlight} key={index} data-testid="highlight-card" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
