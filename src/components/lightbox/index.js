import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Constants from 'constants';
import { UseStateValue } from 'provider';
import './styles.css';

export default function Lightbox(props) {
  const {
    image,
  } = props;
  const [, dispatch] = UseStateValue();
  const ref = useRef(null);

  function onClickOutside(evt) {
    evt.preventDefault();

    if (ref.current && !ref.current.contains(evt.target)) {
      dispatch({
        type: Constants.LIGHTBOX_TOGGLE,
        payload: {
          image: {},
          toggleLightbox: false,
        },
      });
    }
  }

  useEffect(() => {
    const event = 'ontouchstart' in window ? 'touchstart' : 'click';

    document.addEventListener(event, onClickOutside);

    return () => {
      document.removeEventListener(event, onClickOutside);
    };
  });

  return (
    <div className="lightbox">
      <img className="img" src={image.link} alt={image.id} ref={ref} />
      <div className="image-details">
        <span>{image.description}</span>
      </div>
    </div>
  );
}

Lightbox.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
};
