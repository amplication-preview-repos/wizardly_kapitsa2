import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EventWhereInput = {
  eventTimestamp?: DateTimeNullableFilter;
  eventType?: StringNullableFilter;
  id?: StringFilter;
  payload?: JsonFilter;
};
