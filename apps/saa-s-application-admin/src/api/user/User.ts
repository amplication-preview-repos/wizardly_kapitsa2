import { Membership } from "../membership/Membership";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  memberships?: Array<Membership>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
