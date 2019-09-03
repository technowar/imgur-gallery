import React, {
  Suspense, lazy, useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import Constants from 'constants';
import { UseStateValue } from 'provider';
import { getAlbums } from 'services/imgur';
import './styles.css';

export default function Index(props) {
  const Select = lazy(() => import('components/select'));
  const {
    history,
  } = props;
  const [, dispatch] = UseStateValue();
  const [albums, setAlbums] = useState([]);
  const retrieveAlbums = useCallback(async () => {
    try {
      const {
        data: {
          data,
        },
      } = await getAlbums();

      setAlbums(data);

      dispatch({
        type: Constants.LOADER_TOGGLE,
        payload: {
          showLoader: false,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: Constants.LOADER_TOGGLE,
      payload: {
        showLoader: true,
      },
    });

    retrieveAlbums();
  }, [dispatch, retrieveAlbums]);

  function onChangeSelect(evt) {
    dispatch({
      type: Constants.ALBUM_SET,
      payload: {
        id: evt.target.options[evt.target.selectedIndex].getAttribute('data-id'),
      },
    });

    history.push(evt.target
      .options[evt.target.selectedIndex]
      .value.replace(/[^A-Z0-9]+/ig, ' ')
      .trim().replace(/\s+/g, '-').toLowerCase());
  }

  return (
    <Suspense fallback={null}>
      {albums.length ? (
        <div className="menu">
          <span>QUICK BROWN FOX</span>
          <Select options={albums} onChange={onChangeSelect} />
        </div>
      ) : null}
    </Suspense>
  );
}

Index.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
