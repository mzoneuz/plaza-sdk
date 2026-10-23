import { CallerParam, pasteAuthHeader } from "@/common";

import * as Params from "./params";
import * as Types from "./types";

/**
 * @deprecated Uzum eski finans servisini o'chirdi: 2026-10-14 dan beri barcha `/seller/finance/*` 404 qaytaradi.
 * O'rniga {@link SellerExpensesList} (`/v1/seller/finance/expenses`) ishlating.
 */
export const ExpensesList: CallerParam<Params.ExpensesListParams, Types.FinancesApi.ExpensesList.Response> = async (http, params) => {
  return http.get("/seller/finance/expenses", { params, headers: pasteAuthHeader(params?.token) });
};

/**
 * Seller xarajatlari (Финансы → Оплата услуг): logistika, ombor, marketing va FBS jarimalari.
 * Token egasi ko'ra oladigan barcha sellerlar bo'yicha qaytadi (`sellerId` e'tiborga olinmaydi).
 * FBS jarimalari — `sources: "Uzum Market"` (kodlar FBS001–FBS004).
 */
export const SellerExpensesList: CallerParam<Params.SellerExpensesListParams, Types.FinancesApi.SellerExpensesList.Response> = (http, { token, ...params }) => {
  return http.get("/v1/seller/finance/expenses", { params, headers: pasteAuthHeader(token) });
};

/**
 * Sotuvlar (Финансы → Заказы): har bir yozuv — zakazdagi bitta SKU qatori, komissiya va logistika bilan.
 * Token egasi ko'ra oladigan barcha sellerlar bo'yicha qaytadi. Cheklovlar: `size` ≤ 1000, `page * size` ≤ 50 000 —
 * katta davrni sana oynalariga bo'lib oling. Do'konda operatsiya bo'lmasa 422 qaytaradi.
 */
export const SellerOrdersList: CallerParam<Params.SellerOrdersListParams, Types.FinancesApi.SellerOrdersList.Response> = (http, { token, ...params }) => {
  return http.get("/v1/seller/finance/orders", { params, headers: pasteAuthHeader(token) });
};
