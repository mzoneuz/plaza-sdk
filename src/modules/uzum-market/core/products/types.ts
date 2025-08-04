import { UzumMarketEntity } from "@/modules/uzum-market/core/types";

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
}
