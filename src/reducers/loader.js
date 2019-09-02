import LOADER_TOGGLE from 'constants';

export default (state, action) => {
  switch (action.type) {
    case LOADER_TOGGLE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
