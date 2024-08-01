import { InputJsonValue } from "../../types";

export type EventUpdateInput = {
  eventTimestamp?: Date | null;
  eventType?: string | null;
  payload?: InputJsonValue;
};
