import { TokenParams } from "@/common";

export interface ExpensesListParams extends TokenParams {
  page: number;
  size: number;
  shopIds?: string;
  dateFrom?: number;
  dateTo?: number;
  sources?: string;
}
