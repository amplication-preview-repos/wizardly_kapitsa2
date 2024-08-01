import { BillingAccount as TBillingAccount } from "../api/billingAccount/BillingAccount";

export const BILLINGACCOUNT_TITLE_FIELD = "name";

export const BillingAccountTitle = (record: TBillingAccount): string => {
  return record.name?.toString() || String(record.id);
};
