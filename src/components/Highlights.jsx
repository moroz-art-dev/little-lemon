import React from 'react';
import Card from './Card';

const Highlights = ({ highlights }) => {
  return (
    <section className='highlights'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h2>This weeks specials!</h2>
          </div>
          <div className='col-2'>
            <button className='button'>Online Menu</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-8'>
            {highlights.map((highlight, index) => (
              <Card highlight={highlight} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
