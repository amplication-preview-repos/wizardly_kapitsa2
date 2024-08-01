import { InvoiceCreateNestedManyWithoutBillingAccountsInput } from "./InvoiceCreateNestedManyWithoutBillingAccountsInput";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type BillingAccountCreateInput = {
  balance?: number | null;
  invoices?: InvoiceCreateNestedManyWithoutBillingAccountsInput;
  name?: string | null;
  organisation?: OrganisationWhereUniqueInput | null;
};
