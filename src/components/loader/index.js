import React from 'react';
import './styles.css';

export default function Loader() {
  return (
    <div className="spinner">
      <div className="inner-spinner">
        <div className="loading" />
      </div>
    </div>
  );
}
