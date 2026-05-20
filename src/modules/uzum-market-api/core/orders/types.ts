import { OrderStatuses } from "@/modules/uzum-market-api/common";
import { UzumMarketEntity } from "@/modules/uzum-market-api/core/types";

export declare namespace OrdersEntity {
  export interface AllowedOrder {
    orderId: number;
    newDeliverUntil: number;
    price: number;
  }

  export interface OrderCounter {
    counter: number;
    status: OrderStatuses;
  }
}

export declare namespace OrdersApi {
  export namespace OrdersList {
    export interface Response {
      payload: {
        orders: UzumMarketEntity.BaseOrder[];
      };
      timestamp: string;
    }
  }

  export namespace OrdersCounts {
    export interface Response {
      payload: {
        ordersCount: OrdersEntity.OrderCounter[];
      };
    }
  }

  export namespace SingleOrder {
    export interface Response {
      payload: UzumMarketEntity.SingleOrder;
      timestamp: string;
    }
  }

  export namespace ChangeDeliverUntilPrice {
    export interface Response {
      payload: {
        prolongedOrders: unknown[];
        allowedOrders: OrdersEntity.AllowedOrder[];
        total: number;
      };
      timestamp: string;
    }
  }

  export namespace CancelOrderPrice {
    export interface Response {
      payload: {
        orderId: number;
        price: number;
        penaltyParameters: UzumMarketEntity.PenaltyParams;
      };
      timestamp: string;
    }
  }
}
