import { User } from "./user";

export class Advertisement {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  specialties?: any[];
  user?: User;
}
