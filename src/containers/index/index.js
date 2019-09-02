import React, { useCallback, useEffect, useState } from 'react';
import { getAlbums } from 'services/photos';
import './styles.css';

export default function Index() {
  const [galleries, setGalleries] = useState([]);
  const authorizeApplication = useCallback(async () => {
    try {
      const {
        data: {
          data,
        },
      } = await getAlbums();

      setGalleries(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    authorizeApplication();
  }, [authorizeApplication]);

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
