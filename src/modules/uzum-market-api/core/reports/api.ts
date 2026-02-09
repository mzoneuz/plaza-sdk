import { CallerParam, CallerParamPayload, pasteAuthHeader, TokenParams } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const CreateDocument: CallerParamPayload<TokenParams, Types.ReportsApi.CreateDocument.Request, Types.ReportsApi.CreateDocument.Response> = (
  http,
  params,
  payload,
) => {
  return http.post<Types.ReportsApi.CreateDocument.Response>("/seller/documents/create", payload, {
    headers: pasteAuthHeader(params.token),
  });
};

export const GetDocuments: CallerParam<Params.GetDocumentsParams, Types.ReportsApi.GetDocuments.Response> = (http, { token, ...params }) => {
  if (!params.jobFilter) params.jobFilter = "SELLS_REPORT,EXPENSES_REPORT,LEFT_OUT_REPORT,MARKED_SALES_REPORT,PAID_STORAGE_REPORT";
  return http.get("/seller/documents/requests", { params, headers: pasteAuthHeader(token) });
};
