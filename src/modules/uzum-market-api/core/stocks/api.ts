import { CallerParam, CallerParamPayload, pasteAuthHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

/** FBS/DBS ombordagi SKUlar va ularning qoldiqlari (seller.uzum.uz → FBS/DBS → Склад) */
export const GetStockSkus: CallerParam<Params.GetStockSkusParams, Types.StocksApi.GetStockSkus.Response> = (http, { token, shopIds, ...params }) => {
  return http.get("/v1/seller/stock/sku", {
    params: { linked: false, amountFilter: "ALL", sortBy: "TOPSKU", ...params, shopIds: Array.isArray(shopIds) ? shopIds.join(",") : shopIds },
    headers: pasteAuthHeader(token),
  });
};

/**
 * Seller (yur litso) bo'yicha FBS/DBS qoldiqlarini yangilaydi. Bitta so'rovda bir nechta magazin SKUlari bo'lishi mumkin.
 * Batch "hammasi yoki hech narsa": bitta SKU xato bo'lsa (masalan, barcode topilmasa — storage-service-09) hech biri yangilanmaydi.
 */
export const UploadStockSkus: CallerParamPayload<Params.SellerIdParams, Types.StocksApi.UploadStockSkus.Request, Types.StocksApi.UploadStockSkus.Response> = (
  http,
  { token, sellerId },
  payload,
) => {
  return http.post("/v1/seller/stock/sku/upload", payload, { params: { sellerId }, headers: pasteAuthHeader(token) });
};
