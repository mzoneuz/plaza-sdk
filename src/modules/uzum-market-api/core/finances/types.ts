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

  export type SellerOrderStatus = "PROCESSING" | "TO_WITHDRAW" | "CANCELED" | (string & {});

  /** `/v1/seller/finance/orders` yozuvi (zakazdagi bitta SKU) */
  export interface SellerOrder {
    id: number;
    orderId: number;
    status: SellerOrderStatus;
    /** ISO sana */
    orderedAt: string;
    deliveredAt?: string;
    shopId: number;
    product: {
      productId: number;
      title: string;
      skuId: number;
      skuTitle: string;
      imageUrl: string;
    };
    /** Sotilgan dona (bekor qilinganda 0) */
    quantity: number;
    /** Bir dona narxi */
    sellPrice: number;
    costPrice: number;
    /** Qator bo'yicha jami komissiya */
    commission: number;
    /** Qator bo'yicha jami logistika */
    logisticsFee: number;
    forWithdraw: number;
    withdrawnAmount: number;
    returned?: { quantity: number; cause?: string; comment?: string };
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
  export namespace SellerOrdersList {
    export interface Response {
      items: FinancesTypes.SellerOrder[];
      /** Filtr bo'yicha jami yozuvlar soni */
      total: number;
      dailyTotals?: unknown[];
    }
  }

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
