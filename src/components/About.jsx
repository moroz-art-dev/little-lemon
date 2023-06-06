import React from 'react';

const About = ({
  aboutContent: {
    title,
    location,
    description,
    imageSrc1,
    imageAlt1,
    imageSrc2,
    imageAlt2,
  },
}) => {
  return (
    <section className='about'>
      <article className='container'>
        <div className='row'>
          <div className='aboutText'>
            <h2>{title}</h2>
            <h3>{location}</h3>
            <p>{description}</p>
          </div>
          <div className='aboutImages'>
            <picture>
              <img src={imageSrc1} alt={imageAlt1} />
            </picture>
            <picture>
              <img src={imageSrc2} alt={imageAlt2} />
            </picture>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
