import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { UseStateValue } from 'provider';
import './styles.css';

export default function Gallery(props) {
  const {
    images,
    onClick,
  } = props;
  const ref = useRef(null);
  const [{
    scroll: {
      scrollY,
    },
  }] = UseStateValue();

  function onScrollWindow(evt) {
    if (ref.current && !ref.current.contains(evt.target)) {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    }
  }

  useEffect(() => {
    window.scrollTo(0, parseInt(scrollY || '0', 10));
    window.addEventListener('scroll', onScrollWindow);

    return () => {
      window.removeEventListener('scroll', onScrollWindow);
    };
  }, [scrollY]);

  return (
    <section className="images" ref={ref}>
      {images.map((image, index) => (
        <div
          className="content"
          role="button"
          tabIndex={index}
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
