import { useState } from "react";
import { ChevronDown, ChevronUp, User as UserIcon } from "lucide-react";

import { RepositoryList } from "./repository-list";

import { IUser } from "@/types";

interface UserItemProps {
  user: IUser;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export const UserItem: React.FC<UserItemProps> = ({
  user,
  isExpanded = false,
  onToggle,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  const handleToggle = () => {
    const newExpandedState = !expanded;
    setExpanded(newExpandedState);
    if (onToggle) onToggle();
  };

  return (
    <div className="mb-3">
      <div
        className="flex justify-between items-center p-4 bg-white border border-gray-100 rounded-md cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <UserIcon className="mr-2 h-5 w-5 text-gray-500" />
          <span>{user.username}</span>
        </div>
        <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {expanded && (
        <div className="pl-2 pr-2 pt-2 animate-slide-down">
          <RepositoryList repositories={user.repositories} />
        </div>
      )}
    </div>
  );
};
