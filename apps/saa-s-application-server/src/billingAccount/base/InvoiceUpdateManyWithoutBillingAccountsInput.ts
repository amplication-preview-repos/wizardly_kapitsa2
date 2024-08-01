/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InvoiceWhereUniqueInput } from "../../invoice/base/InvoiceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InvoiceUpdateManyWithoutBillingAccountsInput {
  @Field(() => [InvoiceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceWhereUniqueInput],
  })
  connect?: Array<InvoiceWhereUniqueInput>;

  @Field(() => [InvoiceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceWhereUniqueInput],
  })
  disconnect?: Array<InvoiceWhereUniqueInput>;

  @Field(() => [InvoiceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InvoiceWhereUniqueInput],
  })
  set?: Array<InvoiceWhereUniqueInput>;
}

export { InvoiceUpdateManyWithoutBillingAccountsInput as InvoiceUpdateManyWithoutBillingAccountsInput };
