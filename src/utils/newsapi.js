import { processServerResponse } from "../utils/utils";
import stubData from "./stubResponse.json";
const baseUrl = import.meta.env.VITE_NEWS_API_BASE_URL;
console.log(import.meta.env);

export const getNews = (q, apiKey, from, to) => {
  // return new Promise((r) => r(stubData));
  return fetch(`${baseUrl}?q=${q}&from=${from}&to=${to}&pageSize=100`, {
    method: "GET",
    headers: {
      authorization: import.meta.env.VITE_NEWS_API_KEY,
    },
  }).then(processServerResponse);
};
