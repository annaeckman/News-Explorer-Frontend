import { processServerResponse } from "../utils/utils";
const baseUrl = "http://newsapi.org/everything";

export const getNews = (q, apiKey, from, to) => {
  return fetch(
    `${baseUrl}?q=${q}&from=${from}&to=${to}&pageSize=100&apiKey=${apiKey}`
  ).then(processServerResponse);
};

// date format:
// from=2024-10-04
