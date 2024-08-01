import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  organisation?: OrganisationWhereUniqueInput | null;
  startDate?: Date | null;
};
