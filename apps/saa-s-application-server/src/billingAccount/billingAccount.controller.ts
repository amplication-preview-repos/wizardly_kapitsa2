import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillingAccountService } from "./billingAccount.service";
import { BillingAccountControllerBase } from "./base/billingAccount.controller.base";

@swagger.ApiTags("billingAccounts")
@common.Controller("billingAccounts")
export class BillingAccountController extends BillingAccountControllerBase {
  constructor(
    protected readonly service: BillingAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
