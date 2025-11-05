import { Paging, ResultResponse } from "@/modules/yandex-market-api/common/interfaces";

import { YandexMarketEntity } from "../types";

export declare namespace ProductsEntity {
  export interface BusinessOfferMapping {
    offer: YandexMarketEntity.BusinessOffer;
    mapping: YandexMarketEntity.BusinessMapping;
    showcaseUrls: YandexMarketEntity.MappingShowcaseUrl[];
  }
}

export declare namespace ProductsApi {
  export namespace CampaignStocks {
    export interface Request {
      archived?: boolean;
      hasStock?: boolean;
      offerIds?: string[];
      stocksWarehouseId?: number;
      withTurnover?: boolean;
    }

    export type Response = ResultResponse<{
      paging: Paging;
      warehouses: YandexMarketEntity.OfferWarehouse[];
    }>;
  }

  export namespace BusinessOfferMappings {
    export interface Request {
      archived?: boolean;
      cardStatuses?: string[];
      categoryIds?: number[];
      offerIds?: string[];
      tags?: string[];
      vendorNames?: string[];
    }

    export type Response = ResultResponse<{
      paging: Paging;
      offerMappings: ProductsEntity.BusinessOfferMapping[];
    }>;
  }
}
