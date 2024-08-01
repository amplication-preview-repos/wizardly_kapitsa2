import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrganisationModuleBase } from "./base/organisation.module.base";
import { OrganisationService } from "./organisation.service";
import { OrganisationController } from "./organisation.controller";
import { OrganisationResolver } from "./organisation.resolver";

@Module({
  imports: [OrganisationModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrganisationController],
  providers: [OrganisationService, OrganisationResolver],
  exports: [OrganisationService],
})
export class OrganisationModule {}
