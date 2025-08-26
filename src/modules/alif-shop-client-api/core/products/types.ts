import { AlifShopClientApiEntity } from "../types";
import { AttributeItem, TermItem } from "../../common/types";
import { IMetaWithTotalLast } from "@/modules/alif-shop-api/common/interfaces";

export declare namespace AlifClientApi {
  export namespace SearchOffersListParams {
    export interface Response {
      n_pages: number;
      n_items: number;
      current_page: number;
      items: AlifShopClientApiEntity.AlifProduct[];
      aggregations: {
        price: {
          doc_count: number;
          stats: {
            count: number;
            min: number;
            max: number;
            avg: number;
            sum: number;
          };
        };
        brand: {
          doc_count: number;
          terms: TermItem[];
        };
        category: {
          doc_count: number;
          terms: TermItem[];
        };
        filters: {
          doc_count: number;
          attributes: AttributeItem[];
        };
      };
    }
  }

  export namespace SingleOffer {
    export interface Response {
      data: {
        item: AlifShopClientApiEntity.SingleOffer;
        item_conditions: AlifShopClientApiEntity.ConditionItem[];
      };
    }
  }

  export namespace SingleModeratedOffer {
    export interface Response {
      moderated_offer: AlifShopClientApiEntity.SingleModeratedOffer;
      item_conditions: Required<AlifShopClientApiEntity.ConditionItem>[];
    }
  }

  export namespace CategoryOffersList {
    export interface Response {
      data: AlifShopClientApiEntity.CategoryOfferItem[];
      meta: IMetaWithTotalLast;
    }
  }
}
