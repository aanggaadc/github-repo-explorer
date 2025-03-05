import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./services";
import { toast } from "sonner";

import { Toaster } from "./components/ui";
import { SearchBox, LoadingCircle, UserList } from "./components";

const App = () => {
  const isInitialMount = useRef(true);

  const [searchQuery, setSearchQuery] = useState("");

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["users", searchQuery],
    queryFn: () => fetchUsers(searchQuery),
    enabled: false,
  });

  const users = data?.items ?? [];

  const handleSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (searchQuery.trim() !== "") refetch();
  }, [searchQuery]);

  useEffect(() => {
    if (error) {
      toast.error("Search error", {
        description: "Failed to fetch users. Please try again.",
      });
    }
  }, [error]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-sm p-6 h-[500px] flex flex-col w-full max-w-md">
          <SearchBox onSearch={handleSearch} isFetching={isLoading} />

          <div className="flex-1 min-h-0">
            {isLoading ? (
              <LoadingCircle />
            ) : (
              <UserList users={users} searchQuery={searchQuery} />
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default App;
