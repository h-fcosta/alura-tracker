import axios, { AxiosInstance } from "axios";

const clientehttp: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

export default clientehttp;
