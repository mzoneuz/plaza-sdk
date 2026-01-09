import { IMultiLang } from "@/common";

export declare namespace StoresEntity {
  export interface ShopCore {
    id: number;
    title: string;
  }


  export interface Shop {
    id: number;
    shopTitle: string;
    shortTitle: string | null;
    urlTitle: string;
    skuTitle: string;
    shopDescription: string;
    description: IMultiLang;
    transferred: boolean;
    chatAvatarUrl: string | null;
  }
  
  export interface Seller {
    sellerName: string;
    sellerId: number;
    shops: ShopCore[];
  }
}

export declare namespace StoresApi {
  export namespace GetMarketingSellers {
    export interface Response {
      payload: StoresEntity.Seller[];
      timestamp: string;
    }
  }

  export namespace GetShopsList {
    export type Response = StoresEntity.Shop[];
  }
}
