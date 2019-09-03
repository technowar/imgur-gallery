function deleteSessionStorage(item) {
  return sessionStorage.removeItem(item);
}

function getSessionStorage(item) {
  return sessionStorage.getItem(item);
}

function setSessionStorage(item, data) {
  return sessionStorage.setItem(item, data);
}

export {
  deleteSessionStorage,
  getSessionStorage,
  setSessionStorage,
};
