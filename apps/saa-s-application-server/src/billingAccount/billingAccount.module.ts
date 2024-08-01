import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillingAccountModuleBase } from "./base/billingAccount.module.base";
import { BillingAccountService } from "./billingAccount.service";
import { BillingAccountController } from "./billingAccount.controller";
import { BillingAccountResolver } from "./billingAccount.resolver";

@Module({
  imports: [BillingAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillingAccountController],
  providers: [BillingAccountService, BillingAccountResolver],
  exports: [BillingAccountService],
})
export class BillingAccountModule {}
