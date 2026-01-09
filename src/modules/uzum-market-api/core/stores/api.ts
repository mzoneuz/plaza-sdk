import { CallerParam, pasteAuthHeader, TokenParams } from "@/common";

import * as Types from "./types";

export const GetMarketingSellers: CallerParam<TokenParams, Types.StoresApi.GetMarketingSellers.Response> = (http, params) => {
  return http.get("/seller/marketing/auction/filter/sellers", { headers: pasteAuthHeader(params?.token) });
};
