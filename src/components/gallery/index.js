import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Gallery(props) {
  const {
    images,
    onClick,
  } = props;

  return (
    <section className="images">
      {images.map((image) => (
        <div
          className="content"
          role="button"
          tabIndex="0"
          key={image.id}
          onClick={(evt) => onClick(evt, image)}
          onKeyUp={(evt) => onClick(evt, image)}
        >
          <div className="overlay" />
          <img className="img" src={image.link} alt={image.id} />
          <div className="image-details">
            <span>{image.description}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

Gallery.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.instanceOf(Function).isRequired,
};
