import React from "react";
import UserItem from "./user-item";

import { IUser } from "@/types";

interface UserListProps {
  users: IUser[];
  searchQuery: string;
}

const UserList: React.FC<UserListProps> = ({ users, searchQuery }) => {
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
    <div className="mt-2">
      <div className="text-sm text-muted-foreground mb-4 animate-fade-in">
        Showing users for "{searchQuery}"
      </div>
      <div className="space-y-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
