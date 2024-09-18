import { BASE_URL } from "./constants";

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const checkResponse = (res: Response): Promise<any> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

interface ISuccessResponse {
  success: boolean;
  [key: string]: any;
}
export const checkSuccess = <T extends ISuccessResponse>(res: T): T => {
  if (res && res.success) {
    return res;
  }
  throw new Error(`Ответ не success: ${JSON.stringify(res)}`);
};

export const request = async <T extends ISuccessResponse>(
  endpoint: string,
  options: RequestInit | undefined
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  const jsonResponse = await checkResponse(response);
  return checkSuccess<T>(jsonResponse);
};

interface IRefreshTokenResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}
export const refreshToken = (): Promise<IRefreshTokenResponse> => {
  return fetch("/auth/token", {
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

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {
    const res = await request(url, options);
    return res;
  } catch (err) {
    if (getErrorMessage(err) === "jwt expired") {
      const refreshData = await refreshToken();
      options.headers = {
        ...(options.headers || {}),
        authorization: refreshData.accessToken,
      };
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const saveTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};
