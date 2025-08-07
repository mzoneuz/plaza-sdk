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
      productList: UzumMarketEntity.ProductItem[];
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
    export type Response = UzumMarketEntity.ProductDescriptionInfo;
  }

  export namespace CreateProduct {
    export type Request = UzumMarketEntity.CreatableProduct;
    export type Response = UzumMarketEntity.ProductDescriptionInfo;
  }

  export namespace GetProduct {
    export type Response = UzumMarketEntity.FullProductDetails;
  }
}
