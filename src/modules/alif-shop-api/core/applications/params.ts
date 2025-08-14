import { NumberRange, TokenParams } from "@/common";

import * as Types from "./types";

export interface ApplicationsParams extends TokenParams {
  page: number;
  per_page?: number;
  q?: string;
  date?: string;
  is_delivery?: NumberRange<0, 1>;
  reject_reason?: NumberRange<1, 16>;
  contract_uploaded?: NumberRange<0, 1>;
  cancel_reason?: NumberRange<1, 10>;
  created_from_str?: Types.ApplicationsEntity.Sources | (string & {});
  search_param: "phone" | "fio" | "passport" | "pinfl" | "application_id" | (string & {});
  status_key: Types.ApplicationsEntity.Statuses | (string & {});
}
