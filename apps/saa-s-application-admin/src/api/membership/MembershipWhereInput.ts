import { StringFilter } from "../../util/StringFilter";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipWhereInput = {
  id?: StringFilter;
  organisation?: OrganisationWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
