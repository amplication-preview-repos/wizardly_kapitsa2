import { BillingAccount } from "../billingAccount/BillingAccount";

export type Invoice = {
  amount: number | null;
  billingAccount?: BillingAccount | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  issueDate: Date | null;
  updatedAt: Date;
};
