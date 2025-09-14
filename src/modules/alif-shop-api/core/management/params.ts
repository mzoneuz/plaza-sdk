import { TokenParams } from "@/common";

export interface CheckReportParams extends TokenParams {
  report_id: string;
}

export interface ReportsListParams extends TokenParams {
  app: string;
}
