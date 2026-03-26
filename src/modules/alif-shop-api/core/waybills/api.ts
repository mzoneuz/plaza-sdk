import { CallerParam, pasteAuthHeaderAndApikey } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const WaybillsList: CallerParam<Params.WaybillsListParams, Types.WaybillsApi.List.Response> = (http, { token, ...params }) => {
  return http.get("/merchant/fulfillment/waybills", {
    params: { page: params.page, perPage: params.perPage },
    headers: pasteAuthHeaderAndApikey(token),
  });
};

export const SingleShipment: CallerParam<Params.ShipmentIdBasedParams, Types.WaybillsApi.Single.Response> = (http, params) => {
  return http.get(`/merchant/fulfillment/shipments/${params.shipmentId}`, {
    headers: pasteAuthHeaderAndApikey(params.token),
  });
};
