export declare namespace FinancesTypes {
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
  export namespace ExpensesList {
    export interface Response {
      payload: {
        payments: FinancesTypes.Expense[];
      };
      timestamp: string;
    }
  }
}
