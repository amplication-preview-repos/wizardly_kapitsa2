import { BillingAccountListRelationFilter } from "../billingAccount/BillingAccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type OrganisationWhereInput = {
  billingAccounts?: BillingAccountListRelationFilter;
  domain?: StringNullableFilter;
  id?: StringFilter;
  memberships?: MembershipListRelationFilter;
  name?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
