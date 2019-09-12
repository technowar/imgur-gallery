import AlbumReducer from './album';
import LightboxReducer from './lightbox';
import LoaderReducer from './loader';
import ScrollReducer from './scroll';

export default ({
  album, lightbox, loader, scroll,
}, action) => ({
  album: AlbumReducer(album, action),
  lightbox: LightboxReducer(lightbox, action),
  loader: LoaderReducer(loader, action),
  scroll: ScrollReducer(scroll, action),
});
