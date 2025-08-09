import { CallerParam, pasteAuthHeaderAndApikey } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const ApplicationsList: CallerParam<Params.ApplicationsParams, Types.ApplicationsApi.List.Response> = async (alifHttp, { token, ...params }) => {
  return alifHttp.get("/application/applications/applications", { params, headers: pasteAuthHeaderAndApikey(token) });
};
