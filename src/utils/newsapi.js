import { processServerResponse } from "../utils/utils";
const baseUrl = "/api/everything";

export const getNews = (q, apiKey, from, to) => {
  return fetch(
    `${baseUrl}?q=${q}&from=${from}&to=${to}&pageSize=100&apiKey=${apiKey}`,
    {
      method: "GET",
      headers: {
        authorization: "e0b4651c4b5048b9be7029a55f2a3270",
      },
    }
  ).then(processServerResponse);
};

export function saveArticle(article) {
  // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url: article.url,
      publishedAt: article.publishedAt, // Use whatever properties the newsAPI gives you, I just made these up
      title: article.title,
      imageUrl: article.urlToImage,
      description: article.description,
      author: article.author,
      // whatever other properties from the newsAPI-given article object you saved to the database
    });
  });
}
