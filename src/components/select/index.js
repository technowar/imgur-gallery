import React from 'react';
import PropTypes from 'prop-types';
import ALBUM_SET from 'constants';
import { UseStateValue } from 'provider';

export default function Select(props) {
  const {
    albums,
    history,
  } = props;
  const [, dispatch] = UseStateValue();

  function onChangeSelect(evt) {
    dispatch({
      type: ALBUM_SET,
      payload: {
        id: evt.target.options[evt.target.selectedIndex].getAttribute('data-id'),
      },
    });
    history.push(evt.target.options[evt.target.selectedIndex].value);
  }

  return (
    <select onChange={onChangeSelect}>
      <option value="">SELECT</option>
      {albums.map((album) => (
        <option key={album.id} value={album.title} data-id={album.id}>
          {album.title}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  albums: PropTypes.instanceOf(Array).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
