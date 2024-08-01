import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { OrganisationTitle } from "../organisation/OrganisationTitle";

export const BillingAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="balance" source="balance" />
        <ReferenceArrayInput
          source="invoices"
          reference="Invoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="organisation.id"
          reference="Organisation"
          label="Organisation"
        >
          <SelectInput optionText={OrganisationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
