/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BillingAccountCreateNestedManyWithoutOrganisationsInput } from "./BillingAccountCreateNestedManyWithoutOrganisationsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { MembershipCreateNestedManyWithoutOrganisationsInput } from "./MembershipCreateNestedManyWithoutOrganisationsInput";
import { SubscriptionCreateNestedManyWithoutOrganisationsInput } from "./SubscriptionCreateNestedManyWithoutOrganisationsInput";

@InputType()
class OrganisationCreateInput {
  @ApiProperty({
    required: false,
    type: () => BillingAccountCreateNestedManyWithoutOrganisationsInput,
  })
  @ValidateNested()
  @Type(() => BillingAccountCreateNestedManyWithoutOrganisationsInput)
  @IsOptional()
  @Field(() => BillingAccountCreateNestedManyWithoutOrganisationsInput, {
    nullable: true,
  })
  billingAccounts?: BillingAccountCreateNestedManyWithoutOrganisationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  domain?: string | null;

  @ApiProperty({
    required: false,
    type: () => MembershipCreateNestedManyWithoutOrganisationsInput,
  })
  @ValidateNested()
  @Type(() => MembershipCreateNestedManyWithoutOrganisationsInput)
  @IsOptional()
  @Field(() => MembershipCreateNestedManyWithoutOrganisationsInput, {
    nullable: true,
  })
  memberships?: MembershipCreateNestedManyWithoutOrganisationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SubscriptionCreateNestedManyWithoutOrganisationsInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionCreateNestedManyWithoutOrganisationsInput)
  @IsOptional()
  @Field(() => SubscriptionCreateNestedManyWithoutOrganisationsInput, {
    nullable: true,
  })
  subscriptions?: SubscriptionCreateNestedManyWithoutOrganisationsInput;
}

export { OrganisationCreateInput as OrganisationCreateInput };