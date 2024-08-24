export const checkResponse = (res) => {
  if (!res.ok) {
    return res.json().then((err) => {
      err.statusCode = res.status;
      return Promise.reject(err);
    });
  }
  return res.json();
};

export const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};
