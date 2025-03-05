export interface IRepository {
  id: number;
  name: string;
  description: string;
  stars: number;
}

export interface IUser {
  id: number;
  username: string;
  repositories: IRepository[];
}
