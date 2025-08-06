import { NumberNullable, StringNullable } from "@/common/types";
import { Dimensions, PromotionSku, RankInfo, SkuCharacteristic, Status, StatusValue } from "../common/interfaces";

export declare namespace UzumMarketEntity {
  export interface SkuCore {
    id: number;
    skuTitle: string;
    quantityCreated: number;
    fullPrice: number;
    sellPrice: number;
    barcode: string;
    ikpu: string;
    skuCharacteristicList: SkuCharacteristic[];
    isActive: boolean;
    canEdit: boolean;
    blocked: boolean;
    status: StatusValue;
    commission: number;
  }

  export interface FilledSkuItem extends SkuCore {
    dimensions: Dimensions;
    article: string | null;
    switchbackActive: boolean;
    marketPrice: number;
    blockReasons: unknown[];
  }

  export interface SkuWithDetails extends SkuCore {
    dimensions: Dimensions;
    article: StringNullable;
    switchbackActive: boolean;
    marketPrice: number;
    blockReasons: unknown[];
  }

  export interface PromotionProduct {
    productId: number;
    skus: PromotionSku[];
  }

  export interface ProductQuantity {
    quantityCreated: number;
    quantityActive: number;
    quantityFbs: number;
    quantityAdditional: number;
    quantityOnPhotoStudio: number;
    quantityArchived?: number;
    quantitySold: number;
    quantityReturned: number;
    quantityMissing: number;
    quantityDefected: number;
    quantityPending: number;
    returnedPercentage: number;
    pstorage: boolean;
  }

  interface SkuWithQuantities extends Required<ProductQuantity> {
    skuTitle: string;
    skuFullTitle: string;
    productTitle: string;
    skuId: number;
    barcode: number;
    archived: boolean;
    commission: NumberNullable;
    characteristics: string;
    previewImage: string;
    ikpu: string;
    purchasePrice: NumberNullable;
    price: number;
    recommendedTotalPrice: NumberNullable;
    blockingReason: StringNullable;
    blockReasons: string[];
    skuBlockReason: StringNullable;
    blocked: boolean;
    rankInfo: RankInfo;
    article: unknown;
    turnover: StringNullable;
    dimensionalGroup: StringNullable;
    paidStorageDimensionalGroup: StringNullable;
    paidStoragePriceItem: StringNullable;
    paidStorageAmount: StringNullable;
    actualDimensionalGroup: StringNullable;
    hasStudioPhoto: unknown;
    forecastOutOfStock: boolean;
    activeSale: boolean;
    switchbackActive: boolean;
    marketPrice: number;
    characteristicsList: SkuCharacteristic[];
    status: StatusValue;
    skuDimension: Dimensions;
    avgdsales: NumberNullable;
    avgdquantity: NumberNullable;
  }

  export interface Product extends ProductQuantity {
    productId: number;
    category: string;
    rating: string;
    commission: NumberNullable;
    status: Status;
    skuList: SkuWithQuantities[];
    skuTitle: string;
    image: string;
    title: string;
    price: number;
    clicks: NumberNullable;
    viewers: number;
    conversion: number;
    blockReason: StringNullable;
    blockComment: StringNullable;
    dateModerated: StringNullable;
    auctionMember: boolean;
    isActive: boolean;
  }
}
