import { Pager, Paging } from "@/modules/yandex-market-api/common";

import { YandexMarketEntity } from "../types";

export declare namespace OrdersApi {
  export namespace CampaignOrder {
    export interface Response {
      order: YandexMarketEntity.CampaignOrder;
    }
  }

  export namespace CampaignOrders {
    export interface Response {
      orders: YandexMarketEntity.CampaignOrder[];
      paging: Paging;
      pager: Pager;
    }
  }
}
