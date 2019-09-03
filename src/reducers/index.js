import AlbumReducer from './album';
import LoaderReducer from './loader';

export default ({ album, loader }, action) => ({
  album: AlbumReducer(album, action),
  loader: LoaderReducer(loader, action),
});
