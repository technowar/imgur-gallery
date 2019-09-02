import React from 'react';

export default (BaseComponent) => {
  function LayoutComponent(props) {
    return (
      <div>
        <BaseComponent {...props}/>
      </div>
    );
  }

  return LayoutComponent;
};
