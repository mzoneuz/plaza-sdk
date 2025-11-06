import { Paging, ResultResponse } from "@/modules/yandex-market-api/common";
import { YandexMarketEntity } from "@/modules/yandex-market-api/core/types";

export declare namespace ReturnsApi {
  export namespace CampaignReturns {
    export type Response = ResultResponse<{
      returns: YandexMarketEntity.Return[];
      paging: Paging;
    }>;
  }
}
