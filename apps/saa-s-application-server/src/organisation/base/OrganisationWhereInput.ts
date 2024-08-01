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
import { BillingAccountListRelationFilter } from "../../billingAccount/base/BillingAccountListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MembershipListRelationFilter } from "../../membership/base/MembershipListRelationFilter";
import { SubscriptionListRelationFilter } from "../../subscription/base/SubscriptionListRelationFilter";

@InputType()
class OrganisationWhereInput {
  @ApiProperty({
    required: false,
    type: () => BillingAccountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BillingAccountListRelationFilter)
  @IsOptional()
  @Field(() => BillingAccountListRelationFilter, {
    nullable: true,
  })
  billingAccounts?: BillingAccountListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  domain?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MembershipListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MembershipListRelationFilter)
  @IsOptional()
  @Field(() => MembershipListRelationFilter, {
    nullable: true,
  })
  memberships?: MembershipListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SubscriptionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SubscriptionListRelationFilter)
  @IsOptional()
  @Field(() => SubscriptionListRelationFilter, {
    nullable: true,
  })
  subscriptions?: SubscriptionListRelationFilter;
}

export { OrganisationWhereInput as OrganisationWhereInput };