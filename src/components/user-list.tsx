import React from "react";
import { UserItem } from "./user-item";

import { IUser } from "@/types";

interface UserListProps {
  users: IUser[];
  searchQuery: string;
}

export const UserList: React.FC<UserListProps> = ({ users, searchQuery }) => {
  if (users.length === 0 && searchQuery) {
    return (
      <div className="text-center py-6 text-muted-foreground animate-fade-in">
        No users found for "{searchQuery}"
      </div>
    );
  }

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="text-sm text-muted-foreground my-4 animate-fade-in">
        Showing users for "{searchQuery}"
      </div>
      <div className="space-y-2 overflow-y-auto flex-1 min-h-0">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
