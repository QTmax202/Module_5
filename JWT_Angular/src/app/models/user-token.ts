import {Role} from "./role";

export interface UserToken {
  id?: string;
  gmail?: string;
  password?: string;
  confirmPassword?: string;
  accessToken?: string;
  roles?: Role[];
}
