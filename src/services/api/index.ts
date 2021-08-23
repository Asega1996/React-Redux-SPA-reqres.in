import axios from "axios";
import { apiConfig } from "constants/api";

export const api = axios.create({
  baseURL: apiConfig.BASE_URL,
  timeout: apiConfig.TIMEOUT,
});
