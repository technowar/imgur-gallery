import React, {
  Suspense, lazy, useCallback, useEffect, useState,
} from 'react';
import LOADER_TOGGLE from 'constants';
import { UseStateValue } from 'provider';
import { getAlbums } from 'services/imgur';
import './styles.css';

export default function Index() {
  const Select = lazy(() => import('components/select'));
  const [, dispatch] = UseStateValue();
  const [albums, setAlbums] = useState([]);
  const authorizeApplication = useCallback(async () => {
    try {
      const {
        data: {
          data,
        },
      } = await getAlbums();

      setAlbums(data);

      dispatch({
        type: LOADER_TOGGLE,
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
      type: LOADER_TOGGLE,
      payload: {
        showLoader: true,
      },
    });

    authorizeApplication();
  }, [authorizeApplication, dispatch]);

  return (
    <Suspense fallback={null}>
      {albums.length ? (
        <div className="menu">
          <span>QUICK BROWN FOX</span>
          <Select albums={albums} />
        </div>
      ) : null}
    </Suspense>
  );
}
