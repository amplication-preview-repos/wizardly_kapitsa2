import { BillingAccountUpdateManyWithoutOrganisationsInput } from "./BillingAccountUpdateManyWithoutOrganisationsInput";
import { MembershipUpdateManyWithoutOrganisationsInput } from "./MembershipUpdateManyWithoutOrganisationsInput";
import { SubscriptionUpdateManyWithoutOrganisationsInput } from "./SubscriptionUpdateManyWithoutOrganisationsInput";

export type OrganisationUpdateInput = {
  billingAccounts?: BillingAccountUpdateManyWithoutOrganisationsInput;
  domain?: string | null;
  memberships?: MembershipUpdateManyWithoutOrganisationsInput;
  name?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutOrganisationsInput;
};
