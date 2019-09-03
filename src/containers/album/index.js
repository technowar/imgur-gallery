import React, { useCallback, useEffect } from 'react';
import Constants from 'constants';
import { UseStateValue } from 'provider';
import { getImages } from 'services/imgur';

export default function Album(prop) {
  const {
    history,
  } = prop;
  const [{
    album: {
      id,
    },
  }, dispatch] = UseStateValue();
  const retrieveImages = useCallback(async (albumId) => {
    try {
      const {
        data: {
          data,
        },
      } = await getImages(albumId);

      console.log(data);

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
    if (!id) {
      history.push('/');
    } else {
      dispatch({
        type: Constants.LOADER_TOGGLE,
        payload: {
          showLoader: true,
        },
      });

      retrieveImages(id);
    }
  }, [dispatch, history, id, retrieveImages]);

  return (
    <h1>ALBUM</h1>
  );
}
