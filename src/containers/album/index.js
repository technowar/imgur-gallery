import React, { useCallback, useEffect } from 'react';
import { UseStateValue } from 'provider';

export default function Album(prop) {
  const {
    history,
  } = prop;
  const [{
    album: {
      id,
    },
  }] = UseStateValue();
  const cb = useCallback(async (albumId) => {
    try {
      console.log(albumId);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!id) {
      history.push('/');
    } else {
      cb(id);
    }
  }, [cb, history, id]);

  return (
    <h1>ALBUM</h1>
  );
}
