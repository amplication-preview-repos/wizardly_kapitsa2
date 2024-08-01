import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  organisationId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
