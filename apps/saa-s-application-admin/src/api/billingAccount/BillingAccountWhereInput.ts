import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type BillingAccountWhereInput = {
  balance?: FloatNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  name?: StringNullableFilter;
  organisation?: OrganisationWhereUniqueInput;
};
