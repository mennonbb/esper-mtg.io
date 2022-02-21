import axios from "axios";

const url = "";

export const ApiServices = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "aplication/json",
  },
});
