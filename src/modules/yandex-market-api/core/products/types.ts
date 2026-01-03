import { OnlyStatusResponse, Paging, ResultResponse } from "@/modules/yandex-market-api/common";

import { YandexMarketEntity } from "../types";
import { CurrencyType } from "../../common";

export declare namespace ProductsEntity {
  export interface BusinessOfferMapping {
    offer: YandexMarketEntity.BusinessOffer;
    mapping: YandexMarketEntity.BusinessMapping;
    showcaseUrls: YandexMarketEntity.MappingShowcaseUrl[];
  }

  export interface UpdatePriceModel {
    offerId: string;
    price: {
      value?: number;
      currencyId?: CurrencyType;
      discountBase?: number;
      minimumForBestseller?: number;
    };
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

  export namespace UpdateOfferPrices {
    export interface Request {
      offers: ProductsEntity.UpdatePriceModel[];
    }

    export type Response = OnlyStatusResponse;
  }

  export namespace GetSelectedProductsPrices {
    export interface Request {
      offerIds: string[];
      archived: boolean;
    }

    export type Response = ResultResponse<{
      paging: Paging;
      offers: ProductsEntity.UpdatePriceModel[];
    }>;
  }
}
