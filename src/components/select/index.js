import React from 'react';
import PropTypes from 'prop-types';

export default function Select(props) {
  const {
    albums,
  } = props;

  return (
    <select>
      <option value="">SELECT</option>
      {albums.map((album) => <option key={album.id} value={album.title}>{album.title}</option>)}
    </select>
  );
}

Select.propTypes = {
  albums: PropTypes.instanceOf(Array).isRequired,
};
