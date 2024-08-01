/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganisationWhereUniqueInput } from "./OrganisationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrganisationUpdateInput } from "./OrganisationUpdateInput";

@ArgsType()
class UpdateOrganisationArgs {
  @ApiProperty({
    required: true,
    type: () => OrganisationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganisationWhereUniqueInput)
  @Field(() => OrganisationWhereUniqueInput, { nullable: false })
  where!: OrganisationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrganisationUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrganisationUpdateInput)
  @Field(() => OrganisationUpdateInput, { nullable: false })
  data!: OrganisationUpdateInput;
}

export { UpdateOrganisationArgs as UpdateOrganisationArgs };