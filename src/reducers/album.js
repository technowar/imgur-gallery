import ALBUM_SET from 'constants';

export default (state, action) => {
  switch (action.type) {
    case ALBUM_SET:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
