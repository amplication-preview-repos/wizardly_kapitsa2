import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BillingAccountTitle } from "../billingAccount/BillingAccountTitle";
import { MembershipTitle } from "../membership/MembershipTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const OrganisationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="billingAccounts"
          reference="BillingAccount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillingAccountTitle} />
        </ReferenceArrayInput>
        <TextInput label="domain" source="domain" />
        <ReferenceArrayInput
          source="memberships"
          reference="Membership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembershipTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="subscriptions"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};