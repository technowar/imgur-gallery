import React, { Suspense, lazy } from 'react';
import { UseStateValue } from 'provider';
import './styles.css';

export default (BaseComponent) => {
  function LayoutComponent(props) {
    const Loader = lazy(() => import('components/loader'));
    const [state] = UseStateValue();
    const {
      loader: {
        showLoader,
      },
    } = state;

    return (
      <>
        <BaseComponent {...props} />
        <Suspense fallback={null}>
          {showLoader ? <Loader /> : null}
        </Suspense>
      </>
    );
  }

  return LayoutComponent;
};
