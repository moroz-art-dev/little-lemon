import React, { useState } from 'react';
import Modal from 'react-modal';
import Stars from './Stars';

const Review = ({ review }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  Modal.setAppElement('#root');

  const { rating, name, img, content } = review;

  return (
    <article className='review' data-testid='review' onClick={toggleModal}>
      <Stars rating={rating} />
      <div className='reviewImg'>
        <div
          className='pictureContainer'
          style={{ backgroundImage: `url(${img})` }}
          title={name}
        ></div>
        <h3>{name}</h3>
      </div>
      <p>{content}</p>
      {modalIsOpen && (
        <Modal
          className='reviewModal'
          overlayClassName='reviewOverlay'
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel='Content Modal'
        >
          <div className='reviewImg'>
            <div
              className='pictureContainer'
              style={{ backgroundImage: `url(${img})` }}
              title={name}
            ></div>
            <div className='reviewContent'>
              <Stars rating={rating} />
              <h3>{name}</h3>
              <p>{content}</p>
            </div>
          </div>
        </Modal>
      )}
    </article>
  );
};

export default Review;
