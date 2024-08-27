import { BASE_URL } from "./constants";

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

export const refreshToken = () => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  })
    .then(checkResponse)
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      return refreshData;
    });
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    console.log(res);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken.split("Bearer ")[1]);
  localStorage.setItem("refreshToken", refreshToken);
};
