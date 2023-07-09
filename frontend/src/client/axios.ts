import axios, { AxiosInstance } from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const customAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
