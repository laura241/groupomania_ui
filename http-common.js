import axios from "axios";

const token = window.localStorage.getItem("userToken");

const mainAxios = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: token,
  },
});

const redditAxios = axios.create({
  baseURL: "https://www.reddit.com",
});

export {
  mainAxios,
  redditAxios
};