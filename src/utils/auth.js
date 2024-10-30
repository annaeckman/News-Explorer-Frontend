import { processServerResponse } from "../utils/utils";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.mynewsexplorer.jumpingcrab.com"
    : "http://localhost:3002";

export const signinUser = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processServerResponse);
};

export const registerUser = ({ name, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(processServerResponse);
};

export const getUserByToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

// export const authorize = (email, password) => {
//   // Pretend we did a fetch request that gave us back a token
//   return new Promise((resolve, reject) => {
//     resolve({ token: "a fake token" });
//   });
// };

// export const checkToken = (token) => {
//   // Pretend we did a fetch request that gave us back a user
//   return new Promise((resolve, reject) => {
//     resolve({
//       data: { name: "fake user", email: "fake@example,com", id: "fake-id" },
//     });
//   });
// };
