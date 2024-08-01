import { BillingAccount } from "../billingAccount/BillingAccount";
import { Membership } from "../membership/Membership";
import { Subscription } from "../subscription/Subscription";

export type Organisation = {
  billingAccounts?: Array<BillingAccount>;
  createdAt: Date;
  domain: string | null;
  id: string;
  memberships?: Array<Membership>;
  name: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
