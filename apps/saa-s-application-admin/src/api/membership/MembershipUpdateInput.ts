import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipUpdateInput = {
  organisation?: OrganisationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
