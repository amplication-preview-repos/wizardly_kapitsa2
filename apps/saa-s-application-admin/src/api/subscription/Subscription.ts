import { Organisation } from "../organisation/Organisation";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  organisation?: Organisation | null;
  startDate: Date | null;
  updatedAt: Date;
};
