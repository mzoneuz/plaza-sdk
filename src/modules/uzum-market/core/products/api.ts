import { pasteAuthHeader } from "@/modules/uzum-market/common/utils";

import * as Types from "./types";
import * as Params from "./params";
import * as Mappers from "./mappers";
import { CallerParam, CallerParamPayload } from "@/common/types";

export const ArchiveProduct: CallerParam<Params.SkuIdBasedParams> = (uzumHttp, { token, shopId, skuId }) => {
  return uzumHttp.post<Types.IApi.ArchiveProduct.Response>(`/seller/shop/${shopId}/product/sku/${skuId}/archive`, null, {
    headers: pasteAuthHeader(token),
  });
};

export const UnarchiveProduct: CallerParam<Params.SkuIdBasedParams> = (uzumHttp, { token, shopId, skuId }) => {
  return uzumHttp.post<Types.IApi.UnarchiveProduct.Response>(`/seller/shop/${shopId}/product/sku/${skuId}/archive/restore`, null, {
    headers: pasteAuthHeader(token),
  });
};

export const ProductsList: CallerParam<Params.ProductListParams> = async (uzumHttp, params) => {
  return await uzumHttp.get<Types.IApi.ProductsList.Response>(`/seller/shop/${params.shopId}/product/getProducts`, {
    params: Mappers.ProductListParamsMapper(params),
    headers: pasteAuthHeader(params.token),
  });
};

export const RemovePromotion: CallerParamPayload<Params.TokenAndShopId, Types.IApi.RemovePromotion.Request> = (uzumHttp, params, payload) => {
  return uzumHttp.post(`/seller/shop/${params.shopId}/marketing/calendar-event/remove`, payload, { headers: pasteAuthHeader(params.token) });
};

export const AddPromotion: CallerParamPayload<Params.TokenAndShopId, Types.IApi.AddPromotion.Request> = (uzumHttp, params, payload) => {
  return uzumHttp.post(`/seller/shop/${params.shopId}/marketing/calendar-event/add`, payload, { headers: pasteAuthHeader(params.token) });
};
