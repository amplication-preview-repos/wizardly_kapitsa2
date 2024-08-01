import { BillingAccountWhereUniqueInput } from "../billingAccount/BillingAccountWhereUniqueInput";

export type InvoiceUpdateInput = {
  amount?: number | null;
  billingAccount?: BillingAccountWhereUniqueInput | null;
  dueDate?: Date | null;
  issueDate?: Date | null;
};
