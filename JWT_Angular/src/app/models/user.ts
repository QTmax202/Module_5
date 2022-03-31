import {Role} from "./role";

export interface User {
  id?: number;
  gmail?: string;
  password?: string;
  roles?: [Role];
}
