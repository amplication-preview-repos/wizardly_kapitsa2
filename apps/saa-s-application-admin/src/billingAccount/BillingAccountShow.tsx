import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BILLINGACCOUNT_TITLE_FIELD } from "./BillingAccountTitle";
import { ORGANISATION_TITLE_FIELD } from "../organisation/OrganisationTitle";

export const BillingAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="Organisation"
          source="organisation.id"
          reference="Organisation"
        >
          <TextField source={ORGANISATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Invoice"
          target="billingAccountId"
          label="Invoices"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="BillingAccount"
              source="billingaccount.id"
              reference="BillingAccount"
            >
              <TextField source={BILLINGACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dueDate" source="dueDate" />
            <TextField label="ID" source="id" />
            <TextField label="issueDate" source="issueDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
