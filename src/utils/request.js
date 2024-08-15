export function checkResponse(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}
