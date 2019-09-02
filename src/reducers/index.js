import LoaderReducer from './loader';

export default ({ loader }, action) => ({
  loader: LoaderReducer(loader, action),
});
