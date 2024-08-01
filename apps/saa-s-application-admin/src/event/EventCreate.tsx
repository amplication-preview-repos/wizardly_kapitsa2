import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="eventTimestamp" source="eventTimestamp" />
        <TextInput label="eventType" source="eventType" />
        <div />
      </SimpleForm>
    </Create>
  );
};
