import { SortOrder } from "../../util/SortOrder";

export type BillingAccountOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organisationId?: SortOrder;
  updatedAt?: SortOrder;
};
