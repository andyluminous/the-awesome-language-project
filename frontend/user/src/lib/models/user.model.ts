export interface IUserInfo {
  username: string;
  isLoggedIn: boolean;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}