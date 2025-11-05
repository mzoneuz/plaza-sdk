import { Pager } from "@/modules/yandex-market-api/common/interfaces";
import { YandexMarketEntity } from "@/modules/yandex-market-api/core/types";

export declare namespace StoresApi {
  export namespace Campaigns {
    export interface Response {
      campaigns: YandexMarketEntity.Campaign[];
      pager: Pager;
    }
  }

  export namespace Campaign {
    export interface Response {
      campaign: YandexMarketEntity.Campaign;
    }
  }
}
