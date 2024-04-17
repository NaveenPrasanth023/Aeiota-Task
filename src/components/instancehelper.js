import axios from "axios";

export const uploadImageToData = axios.create({
  baseURL: "http://www.example.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
