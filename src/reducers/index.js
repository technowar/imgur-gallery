import AlbumReducer from './album';
import LightboxReducer from './lightbox';
import LoaderReducer from './loader';

export default ({ album, lightbox, loader }, action) => ({
  album: AlbumReducer(album, action),
  lightbox: LightboxReducer(lightbox, action),
  loader: LoaderReducer(loader, action),
});
