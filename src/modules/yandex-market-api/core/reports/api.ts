import { CallerParamPayload, pasteApiKeyHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const GenerateServiceReport: CallerParamPayload<
  Params.GenerateServiceReportParams,
  Types.ReportsApi.GenerateServiceReport.Request,
  Types.ReportsApi.GenerateServiceReport.Response
> = (http, { apiKey, ...params }, payload) => {
  return http.post("/v2/reports/united-marketplace-services/generate", payload, { params, headers: pasteApiKeyHeader(apiKey) });
};
