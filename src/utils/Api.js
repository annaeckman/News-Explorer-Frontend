import { processServerResponse } from "../utils/utils";
import { getToken } from "../utils/token";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrwtwr.jumpingcrab.com"
    : "http://localhost:3001";

function getArticles() {
  return fetch(`${baseUrl}/articles`).then(processServerResponse);
}

function deleteArticle(id, token) {
  return fetch(`${baseUrl}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
}

function saveArticle(
  { keyword, title, text, date, source, link, image },
  token
) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ keyword, title, text, date, source, link, image }),
  }).then(processServerResponse);
}

export { getArticles, deleteArticle, saveArticle };
