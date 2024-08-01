import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  eventTimestamp?: Date | null;
  eventType?: string | null;
  payload?: InputJsonValue;
};
