import React, { useCallback, useEffect, useState } from 'react';
import LOADER_TOGGLE from 'constants';
import { UseStateValue } from 'provider';
import { getAlbums } from 'services/imgur';
import './styles.css';

export default function Index() {
  const [, dispatch] = UseStateValue();
  const [galleries, setGalleries] = useState([]);
  const authorizeApplication = useCallback(async () => {
    try {
      const {
        data: {
          data,
        },
      } = await getAlbums();

      setGalleries(data);

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

  let Galleries = '';

  if (galleries.length) {
    Galleries = 'Jumps';
  }

  return (
    <div className="menu">
      <span>
        QUICK BROWN FOX
        {Galleries}
      </span>
    </div>
  );
}
