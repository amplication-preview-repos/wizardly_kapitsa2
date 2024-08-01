import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  billingAccountId?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  issueDate?: SortOrder;
  updatedAt?: SortOrder;
};
