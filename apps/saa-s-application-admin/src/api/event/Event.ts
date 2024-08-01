import { JsonValue } from "type-fest";

export type Event = {
  createdAt: Date;
  eventTimestamp: Date | null;
  eventType: string | null;
  id: string;
  payload: JsonValue;
  updatedAt: Date;
};
