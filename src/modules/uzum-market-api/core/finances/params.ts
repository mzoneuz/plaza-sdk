import { TokenParams } from "@/common";

import { SellerExpenseSourceType } from "./types";

export interface SellerExpensesListParams extends TokenParams {
  /** 0 dan boshlanadi */
  page: number;
  /** Ko'pi bilan 1000 */
  size: number;
  /** Epoch soniyada (millisekund emas) */
  dateFrom?: number;
  /** Epoch soniyada */
  dateTo?: number;
  /** Manba nomi, masalan "Uzum Market" (FBS jarimalari), "Логистика", "Склад", "Маркетинг" */
  sources?: string;
  sourceTypes?: SellerExpenseSourceType;
  shopIds?: string;
}

/** @deprecated {@link SellerExpensesListParams} ga qarang */
export interface ExpensesListParams extends TokenParams {
  page: number;
  size: number;
  shopIds?: string;
  dateFrom?: number;
  dateTo?: number;
  sources?: string;
}
