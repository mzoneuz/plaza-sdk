import { CallerParam, CallerParamPayload, pasteApiKeyHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const GenerateServiceReport: CallerParamPayload<
  Params.GenerateServiceReportParams,
  Types.ReportsApi.GenerateServiceReport.Request,
  Types.ReportsApi.GenerateServiceReport.Response
> = (http, { apiKey, ...params }, payload) => {
  return http.post("/v2/reports/united-marketplace-services/generate", payload, { params, headers: pasteApiKeyHeader(apiKey) });
};

export const GetSingleServiceReport: CallerParam<Params.GetSingleServiceReportParams, Types.ReportsApi.GetSingleServiceReport.Response> = (
  http,
  { apiKey, reportId },
) => {
  return http.get(`/v2/reports/info/${reportId}`, {
    headers: pasteApiKeyHeader(apiKey),
  });
};
