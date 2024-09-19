import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    // Add your default parameters here
    populate: "*",
  },
});

export default api;
