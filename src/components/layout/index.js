import React, { Suspense, lazy } from 'react';
import { UseStateValue } from 'provider';
import './styles.css';

export default (BaseComponent) => {
  function LayoutComponent(props) {
    const Lightbox = lazy(() => import('components/lightbox'));
    const Loader = lazy(() => import('components/loader'));
    const [{
      lightbox: {
        image,
        toggleLightbox,
      },
      loader: {
        toggleLoader,
      },
    }] = UseStateValue();

    return (
      <>
        <BaseComponent {...props} />
        <Suspense fallback={null}>
          {toggleLightbox ? <Lightbox image={image} /> : null}
          {toggleLoader ? <Loader /> : null}
        </Suspense>
      </>
    );
  }

  return LayoutComponent;
};
