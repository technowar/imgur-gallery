import GalleryReducer from './gallery';

export default ({ gallery }, action) => ({
  gallery: GalleryReducer(gallery, action),
});
