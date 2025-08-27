import { CallerParam, CallerPayload, SlugParams } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const SearchOffersList: CallerPayload<Params.SearchOffersListParams, Types.AlifClientApi.SearchOffersList.Response> = (http, payload) => {
  const { order = null, price_range = {}, brands = [], filters = {}, ...restPayload } = payload;
  return http.post("/search/full-text", { order, price_range, brands, filters, ...restPayload });
};

export const SingleOffer: CallerParam<SlugParams, Types.AlifClientApi.SingleOffer.Response> = (http, params) => {
  return http.get(`/offers/${params.slug}`);
};

export const SingleModeratedOffer: CallerParam<SlugParams, Types.AlifClientApi.SingleModeratedOffer.Response> = (http, params) => {
  return http.get(`/moderated-offers/${params.slug}`);
};

export const CategoryOffersList: CallerParam<Params.CategoryOffersListParams, Types.AlifClientApi.CategoryOffersList.Response> = (http, params) => {
  return http.get("/categories/offers", { params });
};
