import { api } from "services/api";

export const postLoginService = async (credentials) => {
  return await api.post(`/login`, credentials);
};
