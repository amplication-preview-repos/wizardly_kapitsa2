import { Organisation } from "../organisation/Organisation";
import { User } from "../user/User";

export type Membership = {
  createdAt: Date;
  id: string;
  organisation?: Organisation | null;
  updatedAt: Date;
  user?: User | null;
};
