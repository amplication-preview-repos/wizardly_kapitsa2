import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BillingAccountResolverBase } from "./base/billingAccount.resolver.base";
import { BillingAccount } from "./base/BillingAccount";
import { BillingAccountService } from "./billingAccount.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillingAccount)
export class BillingAccountResolver extends BillingAccountResolverBase {
  constructor(
    protected readonly service: BillingAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
