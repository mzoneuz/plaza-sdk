import { IMultiLang } from "@/common/interfaces";
import { CommissionDto, DefinedCharacteristic, Filter, Status } from "@/modules/uzum-market/common/interfaces";

import { UzumMarketEntity } from "../types";

export declare namespace IApi {
  export namespace ArchiveProduct {
    export type Response = UzumMarketEntity.SkuCore;
  }

  export namespace UnarchiveProduct {
    export type Response = UzumMarketEntity.SkuCore;
  }

  export namespace ProductsList {
    export interface Response {
      productList: UzumMarketEntity.Product[];
      totalProductsAmount: number;
    }
  }

  export namespace RemovePromotion {
    export interface Request {
      calendarEventId: number;
      productId: number;
    }
  }

  export namespace AddPromotion {
    export interface Request {
      calendarEventId: number;
      products: UzumMarketEntity.PromotionProduct[];
    }
  }

  export namespace ProductDescription {
    export interface Response {
      id: number;
      shopSkuTitle: string;
      title: IMultiLang;
      productSkuTitle: string;
      commission: number;
      commissionDto: CommissionDto;
      hasCustomCharacteristics: boolean;
      definedCharacteristicList: DefinedCharacteristic[];
      customCharacteristicList: DefinedCharacteristic[];
      skuList: UzumMarketEntity.FilledSkuItem[];
      filters: Filter[];
      newYearStatus: Status;
      hasActiveCalendarEvents: boolean;
    }
  }
}
