import { CallerPayload } from "@/common";

import * as Params from "./params";

export const SearchList: CallerPayload<Params.SearchListParams> = (http, payload) => {
  const { order = null, price_range = {}, brands = [], filters = {}, ...restPayload } = payload;
  return http.post("/search/full-text", { order, price_range, brands, filters, ...restPayload });
};
