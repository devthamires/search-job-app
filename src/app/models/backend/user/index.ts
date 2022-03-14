import { Employee, Recruter } from './roles';

export interface User {
  uid: string;
  name: string;
  photoURL: string;
  email: string;
  country: string;
  about?: string;
  role: Employee | Recruter;
  created: Date;
  updated?: Date;
}
