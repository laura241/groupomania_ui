import axios from "axios";

const token = localStorage.getItem("userToken");
const RedditToken = localStorage.getItem("accessToken");

const mainAxios = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: token,
  },
});

const redditAxios = axios.create({
  baseURL: "https://oauth.reddit.com",
  headers: {
    Authorization: `Bearer ${RedditToken}`
  }
});

export {
  mainAxios,
  redditAxios
};