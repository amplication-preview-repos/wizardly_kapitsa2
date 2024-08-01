import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BillingAccountWhereUniqueInput } from "../billingAccount/BillingAccountWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  billingAccount?: BillingAccountWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  issueDate?: DateTimeNullableFilter;
};
