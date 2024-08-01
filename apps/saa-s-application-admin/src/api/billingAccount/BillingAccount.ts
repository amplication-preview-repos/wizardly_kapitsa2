import { Invoice } from "../invoice/Invoice";
import { Organisation } from "../organisation/Organisation";

export type BillingAccount = {
  balance: number | null;
  createdAt: Date;
  id: string;
  invoices?: Array<Invoice>;
  name: string | null;
  organisation?: Organisation | null;
  updatedAt: Date;
};
