import { TokenParams } from "@/common";

export interface GenerateReportParams {
  type_id: number;
  datetime_from: string;
  datetime_to: string;
}

export interface CheckReportParams extends TokenParams {
  report_id: string;
}

export interface ReportsListParams extends TokenParams {
  app: string;
}
