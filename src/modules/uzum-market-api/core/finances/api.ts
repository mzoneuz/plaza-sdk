import { CallerParam, pasteAuthHeader } from "@/common";

import * as Params from "./params";
import * as Types from "./types";

export const ExpensesList: CallerParam<Params.ExpensesListParams, Types.FinancesApi.ExpensesList.Response> = async (http, params) => {
  return http.get("/seller/finance/expenses", { params, headers: pasteAuthHeader(params?.token) });
};
