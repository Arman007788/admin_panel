import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const convertUrlParamsToString = <T extends { [key: string]: any }>(
  params: T
): string => {
  let p = "";

  for (const [key, value] of Object.entries(params)) {
    if (value >= 0 || (value !== "" && value !== undefined)) {
      if (p === "") {
        p = `?${key}=${encodeURIComponent(value)}`;
      } else {
        p = p + `&${key}=${encodeURIComponent(value)}`;
      }
    }
  }

  return p;
};
