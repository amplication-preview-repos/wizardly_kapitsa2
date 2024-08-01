import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type SubscriptionWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  organisation?: OrganisationWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
