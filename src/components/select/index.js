import React from 'react';
import PropTypes from 'prop-types';

export default function Select(props) {
  const {
    options,
    onChange,
  } = props;

  return (
    <select onChange={onChange}>
      <option value="">SELECT</option>
      {options.map((option) => (
        <option key={option.id} value={option.title} data-id={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.instanceOf(Function).isRequired,
};
