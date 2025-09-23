import { CallerParam, pasteAuthHeader } from "@/common";
import * as Params from "./params";

export const ExpensesList: CallerParam<Params.ExpensesListParams> = async (http, params) => {
  return http.get("/seller/finance/expenses", { params, headers: pasteAuthHeader(params?.token) });
};
