import Constants from 'constants';

export default (state, action) => {
  switch (action.type) {
    case Constants.ALBUM_SET:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
