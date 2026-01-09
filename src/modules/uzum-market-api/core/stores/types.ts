export declare namespace StoresEntity {
  export interface StoreCore {
    id: number;
    title: string;
  }

  export interface Seller {
    sellerName: string;
    sellerId: number;
    shops: StoreCore[];
  }
}

export declare namespace StoresApi {
  export namespace GetMarketingSellers {
    export interface Response {
      payload: StoresEntity.Seller[];
      timestamp: string;
    }
  }
}
