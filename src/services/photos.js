import client from './index';

function getAlbums() {
  return client.get('/3/account/J4hmTor/albums');
}

function getImages() {
  console.log('Get Images');
}

export {
  getAlbums,
  getImages,
};
