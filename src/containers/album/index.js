import React, {
  Suspense, lazy, useCallback, useEffect, useState,
} from 'react';
import Constants from 'constants';
import { UseStateValue } from 'provider';
import { getImages } from 'services/imgur';

export default function Album(prop) {
  const Gallery = lazy(() => import('components/gallery'));
  const {
    history,
  } = prop;
  const [{
    album: {
      id,
    },
  }, dispatch] = UseStateValue();
  const [images, setImages] = useState([]);
  const retrieveImages = useCallback(async (albumId) => {
    try {
      const {
        data: {
          data,
        },
      } = await getImages(albumId);

      setImages(data);

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

  function onClickImage(evt, image) {
    evt.preventDefault();

    console.log(image);
  }

  return (
    <Suspense fallback={null}>
      {images.length ? (
        <Gallery images={images} onClick={onClickImage} />
      ) : null }
    </Suspense>
  );
}
