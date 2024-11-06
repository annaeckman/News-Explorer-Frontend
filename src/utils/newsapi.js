import { processServerResponse } from "../utils/utils";
import stubData from "./stubResponse.json";
const baseUrl = import.meta.env.VITE_NEWS_API_BASE_URL;

export const getNews = (q, apiKey, from, to) => {
  // return new Promise((r) => r(stubData));
  console.log("is this running");
  return fetch(
    `${baseUrl}?q=${q}&from=${from}&to=${to}&pageSize=100&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`
  ).then(processServerResponse);
};

// fake timeout for testing:
// .then((res) => {
//   return new Promise((r) => setTimeout(() => r(res), 30000));
// })
