import { BillingAccountCreateNestedManyWithoutOrganisationsInput } from "./BillingAccountCreateNestedManyWithoutOrganisationsInput";
import { MembershipCreateNestedManyWithoutOrganisationsInput } from "./MembershipCreateNestedManyWithoutOrganisationsInput";
import { SubscriptionCreateNestedManyWithoutOrganisationsInput } from "./SubscriptionCreateNestedManyWithoutOrganisationsInput";

export type OrganisationCreateInput = {
  billingAccounts?: BillingAccountCreateNestedManyWithoutOrganisationsInput;
  domain?: string | null;
  memberships?: MembershipCreateNestedManyWithoutOrganisationsInput;
  name?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutOrganisationsInput;
};
