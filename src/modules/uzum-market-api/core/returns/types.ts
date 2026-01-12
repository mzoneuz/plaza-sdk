import { UzumMarketEntity } from "@/modules/uzum-market-api/core/types";
import { ReturnStatuses, ReturnTypes } from "@/modules/uzum-market-api/common";
import { NumberNullable } from "@/common";

export declare namespace ReturnsEntity {
  export interface Return {
    id: number;
    dateCreated: number;
    status: ReturnStatuses;
    stock: UzumMarketEntity.OrderStock;
    timeSlotReservation: null;
    paidStorage: {
      startDate: number;
      endDate: number;
      status: ReturnStatuses;
    };
    executionDate: number;
    assembledDate: number;
    completedDate: number;
    canceledDate: NumberNullable;
    externalNumber: NumberNullable;
    type: ReturnTypes;
    ettnInfo: unknown;
    returnDropInfo: unknown;
  }
}

export declare namespace ReturnsApi {
  export namespace GetReturns {
    export interface Response {
      payload: ReturnsEntity.Return[];
      timestamp: string;
    }
  }
}
