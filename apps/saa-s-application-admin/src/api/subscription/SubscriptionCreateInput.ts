import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  organisation?: OrganisationWhereUniqueInput | null;
  startDate?: Date | null;
};
