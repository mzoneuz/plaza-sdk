import { CardImage } from "@/modules/alif-shop-api/common/types";
import { ILinks, IMetaWithPagination } from "@/modules/alif-shop-api/common/interfaces";

export declare namespace ProductsEntity {
  export interface AlifshopOffer {
    id: number;
    product_id: number;
    price: number;
    slug: string;
    is_visible: boolean;
    created_at: string;
    updated_at: string;
    product: {
      id: number;
      name: string;
      title_image: string | null;
      images: CardImage[];
    };
  }

  export interface WarehouseProduct {
    id: number;
    merchant_id: number;
    sku: string;
    name: string;
    ikpu: string;
    is_markable: number;
    original_price: number;
    price: number;
    quantity: number;
    third_category_id: number;
    third_category_name: string;
    category_id: number;
    category_name: string;
    created_at: string;
    updated_at: string;
    alifshop_offer: AlifshopOffer | null;
    category: string;
    item_category: {
      id: number;
      name: string;
      is_markable: number;
    };
  }
}

export declare namespace ProductsApi {
  export namespace SingleWarehouse {
    export interface Response {
      data: ProductsEntity.WarehouseProduct;
    }
  }

  export namespace UpdateWarehouse {
    export interface Request {
      name: string;
      ikpu: string;
      sku: string;
      price: number;
      quantity: number;
    }

    export interface Response {
      message: string;
      item: ProductsEntity.WarehouseProduct;
    }
  }

  export namespace WarehouseList {
    export interface Response {
      data: ProductsEntity.WarehouseProduct[];
      links: ILinks;
      meta: IMetaWithPagination;
    }
  }
}
