import { api } from "services/api";

export const getListUsers = async (query: string = "") => {
  return await api.get(`/users${query.length ? query : ""}`);
};
