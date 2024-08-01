import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BillingAccountTitle } from "../billingAccount/BillingAccountTitle";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="billingAccount.id"
          reference="BillingAccount"
          label="BillingAccount"
        >
          <SelectInput optionText={BillingAccountTitle} />
        </ReferenceInput>
        <DateTimeInput label="dueDate" source="dueDate" />
        <DateTimeInput label="issueDate" source="issueDate" />
      </SimpleForm>
    </Create>
  );
};
