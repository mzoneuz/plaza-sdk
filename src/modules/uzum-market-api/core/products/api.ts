import * as Types from "./types";
import * as Params from "./params";
import * as Mappers from "./mappers";

import { pasteAuthHeader } from "@/common/utils";
import { CallerParam, CallerParamPayload } from "@/common/types";
import { ProductIdBasedParams, SkuBasedParams, SkuIdBasedParams, TokenAndShopId } from "@/modules/uzum-market-api/common";

export const ArchiveProduct: CallerParam<SkuIdBasedParams, Types.ProductsApi.ArchiveProduct.Response> = (uzumHttp, { shopId, skuId, ...params }) => {
  return uzumHttp.post(`/seller/shop/${shopId}/product/sku/${skuId}/archive`, null, {
    headers: pasteAuthHeader(params?.token),
  });
};

export const UnarchiveProduct: CallerParam<SkuIdBasedParams, Types.ProductsApi.UnarchiveProduct.Response> = (uzumHttp, { shopId, skuId, ...params }) => {
  return uzumHttp.post(`/seller/shop/${shopId}/product/sku/${skuId}/archive/restore`, null, {
    headers: pasteAuthHeader(params?.token),
  });
};

export const ProductsList: CallerParam<Params.ProductListParams, Types.ProductsApi.ProductsList.Response> = async (uzumHttp, params) => {
  return await uzumHttp.get(`/seller/shop/${params.shopId}/product/getProducts`, {
    params: Mappers.ProductListParamsMapper(params),
    headers: pasteAuthHeader(params?.token),
  });
};

export const RemovePromotion: CallerParamPayload<TokenAndShopId, Types.ProductsApi.RemovePromotion.Request> = (uzumHttp, params, payload) => {
  return uzumHttp.post(`/seller/shop/${params.shopId}/marketing/calendar-event/remove`, payload, { headers: pasteAuthHeader(params?.token) });
};

export const AddPromotion: CallerParamPayload<TokenAndShopId, Types.ProductsApi.AddPromotion.Request> = (uzumHttp, params, payload) => {
  return uzumHttp.post(`/seller/shop/${params.shopId}/marketing/calendar-event/add`, payload, { headers: pasteAuthHeader(params?.token) });
};

export const InvolvedProductsList: CallerParam<Params.InvolvedProductsParams> = async (uzumHttp, params) => {
  return uzumHttp.get(`/seller/shop/${params.shopId}/marketing/calendar-event/products-involved`, {
    params: { eventId: params.eventId, page: params.page, size: params.size },
    headers: pasteAuthHeader(params?.token),
  });
};

export const ProductDescription: CallerParam<ProductIdBasedParams, Types.ProductsApi.ProductDescription.Response> = async (uzumHttp, params) => {
  return uzumHttp.get(`/seller/shop/${params.shopId}/product/${params.productId}/description-response`, {
    headers: pasteAuthHeader(params?.token),
  });
};

export const CheckSkuExists: CallerParam<SkuBasedParams, { exists: boolean }> = async (uzumHttp, params) => {
  return uzumHttp.get(`/seller/shop/${params.shopId}/product/checkSku`, {
    headers: pasteAuthHeader(params?.token),
    params: { sku: params.sku },
  });
};

export const CreateProduct: CallerParamPayload<
  TokenAndShopId,
  Types.ProductsApi.CreateProduct.Request,
  Types.ProductsApi.CreateProduct.Response
> = async (uzumHttp, params, payload) => {
  return uzumHttp.post(`/seller/shop/${params.shopId}/product/createProduct`, payload, {
    headers: pasteAuthHeader(params?.token),
  });
};

export const GetProduct: CallerParam<ProductIdBasedParams, Types.ProductsApi.GetProduct.Response> = async (uzumHttp, params) => {
  return uzumHttp.get(`/seller/shop/${params.shopId}/product`, {
    params: { productId: params.productId },
    headers: pasteAuthHeader(params?.token),
  });
};

export const SendSkuData: CallerParamPayload<TokenAndShopId, unknown> = async (uzumHttp, params, payload) => {
  return uzumHttp.post<string>(`/seller/shop/${params.shopId}/product/sendSkuData`, payload, {
    headers: pasteAuthHeader(params?.token),
  });
};
