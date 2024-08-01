import { SortOrder } from "../../util/SortOrder";

export type MembershipOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  organisationId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
