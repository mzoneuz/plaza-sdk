import { CallerParam, CallerParamPayload, pasteAuthHeaderAndApikey, TokenParams } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const GenerateReport: CallerParamPayload<
  TokenParams,
  Types.AlifManagementApi.GenerateReport.Request,
  Types.AlifManagementApi.GenerateReport.Response
> = (http, params, payload) => {
  return http.post("/excel/excel/v1/reports/generate", payload, { headers: pasteAuthHeaderAndApikey(params?.token) });
};

export const CheckReport: CallerParam<Params.ReportIdBasedParams, Types.AlifManagementApi.CheckReport.Response> = (http, params) => {
  return http.get("/excel/excel/v1/reports/check", {
    params: { report_id: params.report_id },
    headers: pasteAuthHeaderAndApikey(params?.token),
  });
};

export const ReportsList: CallerParam<Params.ReportsListParams, Types.AlifManagementApi.ReportsList.Response> = (http, params) => {
  return http.get("/excel/excel/v1/reports", { params: { app: params.app }, headers: pasteAuthHeaderAndApikey(params?.token) });
};

export const DownloadReport: CallerParam<Params.ReportIdBasedParams, Blob> = (http, params) => {
  return http.get("/excel/excel/v1/reports/download", {
    params: { report_id: params.report_id },
    responseType: "blob",
    headers: pasteAuthHeaderAndApikey(params?.token),
  });
};
