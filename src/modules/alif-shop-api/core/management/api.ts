import { CallerParam, CallerParamPayload, pasteAuthHeaderAndApikey, TokenParams } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const GenerateReport: CallerParamPayload<TokenParams, Params.GenerateReportParams, Types.AlifManagementApi.GenerateReport.Response> = (
  http,
  params,
  payload,
) => {
  return http.post("/excel/excel/v1/reports/generate", payload, { headers: pasteAuthHeaderAndApikey(params?.token) });
};

export const CheckReport: CallerParam<Params.CheckReportParams, Types.AlifManagementApi.CheckReport.Response> = (http, params) => {
  return http.get("/excel/excel/v1/reports/check", {
    params: { report_id: params.report_id },
    headers: pasteAuthHeaderAndApikey(params?.token),
  });
};
