import fetcher from "@/lib/fetcher";

import { IApiResponse } from "@/types";

export const fetchUsers = async (username: string) => {
  return fetcher<IApiResponse>("search/users", { q: username });
};
