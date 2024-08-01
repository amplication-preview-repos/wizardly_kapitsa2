import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  eventTimestamp?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  updatedAt?: SortOrder;
};
