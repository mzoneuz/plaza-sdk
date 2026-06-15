import { CallerParam, pasteApiKeyHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const GetBusinessSettings: CallerParam<Params.GetBusinessSettingsParams, Types.CabinetApi.GetBusinessSettings.Response> = (http, params) => {
  return http.post(`/v2/businesses/${params.businessId}/settings`, null, { headers: pasteApiKeyHeader(params.apiKey) });
};
