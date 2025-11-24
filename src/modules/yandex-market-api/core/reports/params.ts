import { ApiKeyParams } from "@/common";

export interface GenerateServiceReportParams extends ApiKeyParams {
  format?: "FILE" | "CSV" | "JSON";
  language?: "EN" | "RU";
}

export interface GetSingleServiceReportParams extends ApiKeyParams {
  reportId: string;
}
