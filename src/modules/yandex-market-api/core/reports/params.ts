import { ApiKeyParams } from "@/common";

export interface GenerateServiceReportParams extends ApiKeyParams {
  format?: "FILE" | "CSV" | "JSON";
  language?: "EN" | "RU";
}

export interface GetSingleServiceReportParams extends ApiKeyParams {
  reportId: string;
}

export interface GenerateSalesReportParams extends ApiKeyParams {
  format?: "CSV" | "FILE" | "JSON";
  language?: "RU" | "EN";
}
