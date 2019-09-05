import Constants from 'constants';

export default (state, action) => {
  switch (action.type) {
    case Constants.LIGHTBOX_TOGGLE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
