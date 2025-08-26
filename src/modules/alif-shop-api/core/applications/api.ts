import { CallerParam, pasteAuthHeaderAndApikey } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const ApplicationsList: CallerParam<Params.ApplicationsParams, Types.ApplicationsApi.List.Response> = (http, { token, ...params }) => {
  return http.get("/application/applications/applications", { params, headers: pasteAuthHeaderAndApikey(token) });
};

export const SingleApplication: CallerParam<Params.ApplicationIdBasedParams, Types.ApplicationsApi.Single.Response> = (http, params) => {
  return http.get(`/application/applications/applications/${params.applicationId}`, { headers: pasteAuthHeaderAndApikey(params?.token) });
};

export const DeliverableWithType: CallerParam<Params.ApplicationIdBasedParams> = (http, params) => {
  return http.get(`/delivery/deliveries/deliverable/${params.applicationId}/with-type`, {
    params: { deliverable_type: "application" },
    headers: pasteAuthHeaderAndApikey(params?.token),
  });
};
