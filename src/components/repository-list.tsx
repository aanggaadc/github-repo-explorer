import RepositoryItem from "./repository-item";

import { IRepository } from "@/types";

interface RepositoryListProps {
  repositories: IRepository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  if (repositories.length === 0) {
    return (
      <div className="text-center py-4 text-muted-foreground">
        No repositories found
      </div>
    );
  }

  return (
    <div className="mt-2 space-y-2 animate-slide-down">
      {repositories.map((repo) => (
        <RepositoryItem key={repo.id} repository={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
