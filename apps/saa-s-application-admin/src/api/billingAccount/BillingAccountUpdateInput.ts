import { InvoiceUpdateManyWithoutBillingAccountsInput } from "./InvoiceUpdateManyWithoutBillingAccountsInput";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type BillingAccountUpdateInput = {
  balance?: number | null;
  invoices?: InvoiceUpdateManyWithoutBillingAccountsInput;
  name?: string | null;
  organisation?: OrganisationWhereUniqueInput | null;
};
