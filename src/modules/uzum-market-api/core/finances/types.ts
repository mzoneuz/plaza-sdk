export type SellerExpenseSourceType = "UZUM_MARKET" | "LOGISTICS" | "STORAGE" | "MARKETING" | (string & {});

export declare namespace FinancesTypes {
  /** `/v1/seller/finance/expenses` yozuvi */
  export interface SellerExpense {
    id: number;
    externalId: string;
    /** Masalan FBS002 (jarima), logistics-volume, С000004 */
    code: string;
    type: "PAYMENT" | "REFUND" | (string & {});
    status: string;
    /** Masalan "Штраф за продление заказа [132024580]" — qavsdagi raqam zakaz id */
    serviceName: string;
    source: string;
    sourceType: SellerExpenseSourceType;
    /** ISO sana */
    paidAt: string;
    /** ISO sana */
    serviceAt: string;
    /** Summa (so'm) */
    amount: number;
    quantity: number;
    shopId: number;
  }

  export interface Expense {
    id: number;
    dateCreated: number;
    dateUpdated: unknown | null;
    name: string;
    source: string;
    shopId: number;
    sellerId: number;
    paymentPrice: number;
    amount: number;
    status: string;
    externalId: string;
    code: string;
    dateService: number;
    type: string;
  }
}

export declare namespace FinancesApi {
  export namespace SellerExpensesList {
    export interface Response {
      items: FinancesTypes.SellerExpense[];
      /** Filtr bo'yicha jami yozuvlar soni */
      total: number;
      dailyTotals: unknown[];
    }
  }

  export namespace ExpensesList {
    export interface Response {
      payload: {
        payments: FinancesTypes.Expense[];
      };
      timestamp: string;
    }
  }
}
