import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const InitialState = {
  album: {
    id: '',
  },
  lightbox: {
    image: {},
    toggleLightbox: false,
  },
  loader: {
    toggleLoader: false,
  },
  scroll: {
    scrollY: 0,
  },
};
const Store = createContext();
const UseStateValue = () => useContext(Store);

function StateProvider({ reducers, initialState, children }) {
  return (
    <Store.Provider value={useReducer(reducers, initialState)}>
      {children}
    </Store.Provider>
  );
}

StateProvider.propTypes = {
  reducers: PropTypes.instanceOf(Function).isRequired,
  initialState: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export {
  InitialState,
  StateProvider,
  Store,
  UseStateValue,
};
