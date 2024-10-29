import { processServerResponse } from "../utils/utils";
import { getToken } from "../utils/token";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.mynewsexplorer.jumpingcrab.com"
    : "http://localhost:3001";

function getArticles() {
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
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

function getUser(token) {
  return fetch(`${baseUrl}/users/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
}

export { getArticles, deleteArticle, saveArticle };
