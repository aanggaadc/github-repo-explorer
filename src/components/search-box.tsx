import { useState } from "react";
import { Button, Input } from "@/components/ui";

interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  isFetching: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  onSearch,
  isFetching,
  placeholder = "Enter username",
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full search-container bg-white rounded-md"
    >
      <div className="flex flex-col gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full border border-gray-200 rounded-md py-5 px-4 focus-visible:ring-offset-0 focus-visible:ring-1"
        />
        <Button
          disabled={isFetching}
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 py-6 text-white rounded-md cursor-pointer"
        >
          Search
        </Button>
      </div>
    </form>
  );
};
