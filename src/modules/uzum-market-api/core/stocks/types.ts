import { NumberNullable, StringNullable } from "@/common";
import { Dimensions } from "@/modules/uzum-market-api/common";

export type StockAmountFilter = "ALL" | (string & {});

export type StockSortBy = "TOPSKU" | (string & {});

export declare namespace StocksEntity {
  export interface StockSkuCharacteristic {
    characteristicTitle: string;
    definedType: boolean;
    characteristicValue: string;
  }

  export interface StockSku {
    /** skuId */
    id: number;
    skuTitle: string;
    characteristics: StockSkuCharacteristic[];
    productTitle: string;
    barcode: string;
    sellerSkuCode: StringNullable;
    amount: number;
    updatedAt: string;
    fbsLinked: boolean;
    dbsLinked: boolean;
    availableFbs: boolean;
    availableDbs: boolean;
    productId: number;
    dimensions: Dimensions;
    photo: {
      photo: {
        [key: string]: {
          high: string;
          low: string;
        };
      };
      photoKey: string;
      color: unknown | null;
      hasVerticalPhoto: boolean;
    };
    lostGmv7: NumberNullable;
    zeroReason: StringNullable;
    zeroUpdatedAt: StringNullable;
    lastStockUpdatedAt: StringNullable;
    backInStockAt: StringNullable;
    topsku: boolean | null;
  }

  /**
   * Bitta SKU qoldig'i. skuId va barcode ikkalasi ham majburiy (barcode noto'g'ri bo'lsa butun so'rov 400 qaytadi).
   * fbsLinked/dbsLinked berilmasa server qoldiqni o'zgartirmaydi (updatedRecords: 0), shuning uchun FBS uchun fbsLinked: true yuboring.
   */
  export interface SkuAmountItem {
    skuId: number;
    barcode: string;
    amount: number;
    fbsLinked: boolean;
    dbsLinked?: boolean;
  }
}

export declare namespace StocksApi {
  export namespace GetStockSkus {
    export interface Response {
      payload: {
        skus: StocksEntity.StockSku[];
        hasMore: boolean;
      };
      timestamp?: string;
    }
  }

  export namespace UploadStockSkus {
    export interface Request {
      skuAmountList: StocksEntity.SkuAmountItem[];
    }

    export interface Response {
      payload: {
        /** Yuborilgan SKUlar soni */
        totalRecords: number;
        /** Haqiqatda o'zgargan SKUlar soni (qiymat o'zgarmagan bo'lsa 0) */
        updatedRecords: number;
      };
      timestamp: string;
    }
  }
}
