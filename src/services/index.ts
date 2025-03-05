import fetcher from "@/lib/fetcher";

import { IApiResponse, IRepository } from "@/types";

export const fetchUsers = async (username: string) => {
  return fetcher<IApiResponse>("search/users", { q: username });
};

export const fetchRepositories = async (url: string) => {
  return fetcher<IRepository[]>(url);
};
