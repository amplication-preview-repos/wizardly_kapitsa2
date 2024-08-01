import { BillingAccountWhereUniqueInput } from "../billingAccount/BillingAccountWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  billingAccount?: BillingAccountWhereUniqueInput | null;
  dueDate?: Date | null;
  issueDate?: Date | null;
};
