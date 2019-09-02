import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const InitialState = {
  loader: {
    showLoader: false,
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
