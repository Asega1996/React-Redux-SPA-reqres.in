import { User } from "types/entity/user";

export type RequestUsers = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};
