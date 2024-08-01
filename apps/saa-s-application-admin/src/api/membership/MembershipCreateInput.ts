import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipCreateInput = {
  organisation?: OrganisationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
