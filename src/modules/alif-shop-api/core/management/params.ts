import { TokenParams } from "@/common";

export interface ReportIdBasedParams extends TokenParams {
  report_id: string;
}

export interface ReportsListParams extends TokenParams {
  app: string;
}
