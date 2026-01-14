import { UzumMarketEntity } from "@/modules/uzum-market-api/core/types";
import { PaidStorage, ReturnStatuses, ReturnTypes } from "@/modules/uzum-market-api/common";
import { NumberNullable, StringNullable } from "@/common";

export declare namespace ReturnsEntity {
  export interface Return {
    id: number;
    dateCreated: number;
    status: ReturnStatuses;
    stock: UzumMarketEntity.OrderStock;
    timeSlotReservation: null;
    paidStorage: PaidStorage;
    executionDate: number;
    assembledDate: number;
    completedDate: number;
    canceledDate: NumberNullable;
    externalNumber: NumberNullable;
    type: ReturnTypes;
    ettnInfo: unknown;
    returnDropInfo: unknown;
    // custom fields
    shopId?: number;
  }

  interface ReturnOrderInfo {
    id: number;
    skuId: number;
    amount: number;
    packedAmount: number;
    skuTitle: string;
    productTitle: string;
    purchasePrice: number;
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
  }

  export interface ReturnFullInfo {
    id: number;
    dateCreated: number;
    status: ReturnStatuses;
    stock: UzumMarketEntity.OrderStock;
    timeSlotReservation: unknown | null;
    paidStorage: PaidStorage;
    executionDate: number;
    assembledDate: number;
    completedDate: NumberNullable;
    canceledDate: NumberNullable;
    externalNumber: NumberNullable;
    type: ReturnTypes;
    ettnInfo: unknown | null;
    returnDropInfo: unknown | null;
    shopId: NumberNullable;
    shopTitle: StringNullable;
    returnItems: ReturnOrderInfo[];
    totalAmount: number;
    totalPackedAmount: number;
    countAllowedChange: number;
    maxCountAllowedChange: number;
  }
}

export declare namespace ReturnsApi {
  export namespace GetReturns {
    export interface Response {
      payload: ReturnsEntity.Return[];
      timestamp: string;
    }
  }

  export namespace GetReturnById {
    export interface Response {
      payload: ReturnsEntity.ReturnFullInfo;
      timestamp: string;
    }
  }
}
