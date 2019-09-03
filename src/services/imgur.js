import client from './index';

function getAlbums() {
  return client.get('/3/account/J4hmTor/albums');
}

function getImages(albumId) {
  return client.get(`/3/album/${albumId}/images`);
}

export {
  getAlbums,
  getImages,
};
