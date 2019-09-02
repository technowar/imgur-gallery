import React from 'react';
import './styles.css';

export default (BaseComponent) => {
  function LayoutComponent(props) {
    return <BaseComponent {...props} />;
  }

  return LayoutComponent;
};
