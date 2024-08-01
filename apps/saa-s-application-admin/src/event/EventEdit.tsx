import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="eventTimestamp" source="eventTimestamp" />
        <TextInput label="eventType" source="eventType" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
