export declare namespace FbsEntity {
  export interface SkuAmountItem {
    skuId: number;
    skuTitle: string;
    productTitle: string;
    barcode: string;
    amount: number;
    fbsAllowed: boolean;
    dbsAllowed: boolean;
    fbsLinked: boolean;
    dbsLinked: boolean;
  }
}

export declare namespace FbsApi {
  export namespace FbsStocksList {
    export interface Response {
      payload: {
        skuAmountList: FbsEntity.SkuAmountItem[];
      };
      timestamp: string;
    }
  }

  export namespace EditFbsStocks {
    export interface Request {
      skuAmountList: Partial<Omit<FbsEntity.SkuAmountItem, "fbsAllowed" | "dbsAllowed">>[];
    }

    export interface Response {
      payload: {
        totalRecords: number;
        updatedRecords: number;
      };
      timestamp: string;
    }
  }
}
