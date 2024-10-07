import { processServerResponse } from "../utils/utils";
import stubData from "./stubResponse.json";
const baseUrl = "https://newsapi.org/v2/everything";

export const getNews = (q, apiKey, from, to) => {
  return new Promise((r) => r(stubData));
  // return fetch(
  //   `${baseUrl}?q=${q}&from=${from}&to=${to}&pageSize=100&apiKey=${apiKey}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       authorization: "e0b4651c4b5048b9be7029a55f2a3270",
  //     },
  //   }
  // ).then(processServerResponse);
};

// date format:
// from=2024-10-04
