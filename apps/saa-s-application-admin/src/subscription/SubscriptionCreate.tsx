import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrganisationTitle } from "../organisation/OrganisationTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput
          source="organisation.id"
          reference="Organisation"
          label="Organisation"
        >
          <SelectInput optionText={OrganisationTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
