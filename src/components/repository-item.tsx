import React from "react";
import { Star } from "lucide-react";

import { IRepository } from "@/types";

interface RepositoryItemProps {
  repository: IRepository;
}

export const RepositoryItem: React.FC<RepositoryItemProps> = ({
  repository,
}) => {
  return (
    <div className="repository-item bg-secondary rounded-md p-4 mb-3 animate-fade-in">
      <div className="flex justify-between items-start">
        <div className="flex-1 break-words mr-2 max-w-[calc(100%-40px)]">
          <h3 className="font-medium text-lg">{repository.name}</h3>
          <p className="text-muted-foreground text-sm">
            {repository.description}
          </p>
        </div>
        <div className="flex items-center text-yellow-500 flex-shrink-0">
          <span className="font-medium mr-1">
            {repository.stargazers_count}
          </span>
          <Star size={16} className="fill-yellow-500 text-yellow-500" />
        </div>
      </div>
    </div>
  );
};
