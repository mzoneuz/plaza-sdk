import { NumberNullable, StringNullable } from "@/common/types";
import {
  Category,
  ColorImage,
  Commission,
  DefinedCharacteristic,
  DimensionalGroup,
  Dimensions,
  Filter,
  ProductFilterValue,
  ProductMedia,
  PromotionSku,
  RankInfo,
  RatingInfo,
  SkuCharacteristic,
  Status,
  StatusValue,
} from "../common/interfaces";
import { IMultiLang, IMultiLangArray } from "@/common/interfaces";

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
    article: StringNullable;
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

  export interface SkuWithCardDetails {
    skuTitle: string;
    productTitle: string;
    skuFullTitle: string;
    archived: boolean;
    characteristics: string;
    previewImage: string;
    ikpu: string;
    recommendedTotalPrice: NumberNullable;
    blockingReason: StringNullable;
    blockReasons: string[];
    skuBlockReason: StringNullable;
    blocked: boolean;
    rankInfo: RankInfo;
    article: unknown;
    paidStorageDimensionalGroup: StringNullable;
    actualDimensionalGroup: DimensionalGroup | null;
    hasStudioPhoto: unknown;
    forecastOutOfStock: boolean;
    activeSale: boolean;
    switchbackActive: boolean;
    marketPrice: number;
    characteristicsList: SkuCharacteristic[];
    status: StatusValue;
    skuDimension: Dimensions;
  }

  export interface CreatableSku extends SkuWithCardDetails {
    quantityArchived: number;
    quantityMissing: number;
    returnedPercentage: number;
  }

  export type SkuWithQuantities = SkuWithCardDetails &
    Required<ProductQuantity> & {
      skuId: number;
      barcode: number;
      commission: NumberNullable;
      purchasePrice: NumberNullable;
      price: number;
      turnover: StringNullable;
      dimensionalGroup: StringNullable;
      paidStoragePriceItem: StringNullable;
      paidStorageAmount: StringNullable;
      avgdsales: NumberNullable;
      avgdquantity: NumberNullable;
    };

  export interface ProductItem extends ProductQuantity {
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

  export interface CreatableProduct {
    attributes: IMultiLangArray;
    blockReason: string;
    blockReasons: string[];
    blockComment: string;
    blockedImages: Record<string, unknown>;
    categoryId: number;
    categoryEditable: boolean;
    allFiltersFilled: boolean;
    colorImages: ColorImage[];
    colorCollectionImages: unknown[];
    colorVideos: unknown[];
    comments: Comment[];
    customCharacteristics: unknown[];
    dateModerated: StringNullable;
    definedCharacteristics: DefinedCharacteristic[];
    description: IMultiLang;
    filterValues: ProductFilterValue[];
    filters: unknown[];
    imageCollection: unknown | null;
    okpd2: unknown | null;
    hasAnySkuBlocked: boolean;
    photoOnPreview: boolean;
    productFields: Record<string, unknown>;
    productImages: ProductMedia[];
    productCertificates: unknown[];
    ratingInfo: unknown | null;
    shortDescription: IMultiLang;
    skuBlockReason: unknown | null;
    title: IMultiLang;
    video: ProductMedia | null;
    skuList: UzumMarketEntity.CreatableSku[];
    switchbackActive: boolean;
  }

  export interface ProductDescriptionInfo {
    id: number;
    shopSkuTitle: string;
    title: IMultiLang;
    productSkuTitle: string;
    commission: number;
    commissionDto: Commission;
    hasCustomCharacteristics: boolean;
    definedCharacteristicList: DefinedCharacteristic[];
    customCharacteristicList: unknown[];
    skuList: UzumMarketEntity.FilledSkuItem[] | null;
    filters: Filter[];
    newYearStatus: StatusValue;
    hasActiveCalendarEvents: boolean;
  }

  export interface FullProductDetails {
    title: IMultiLang;
    productImages: ProductMedia[];
    video: ProductMedia | null;
    imageCollection: unknown | null;
    colorImages: ColorImage[];
    colorVideos: unknown[];
    colorCollectionImages: unknown[];
    status: Status;
    moderationStatus: StatusValue & {
      hasAnySkuBlocked: boolean;
    };
    commissionDto: Commission;
    commission: null;
    ratingInfo: RatingInfo;
    category: Category;
    skuTitle: string;
    skuList: CreatableSku[];
    definedCharacteristics: DefinedCharacteristic[];
    customCharacteristics: DefinedCharacteristic[];
    description: IMultiLang;
    attributes: IMultiLangArray;
    tags: IMultiLang[];
    synonyms: [];
    comments: Comment[];
    filters: Filter[];
    shortDescription: IMultiLang;
    vat: string;
    newYearStatus: StatusValue;
    tnVedCode: unknown | null;
    okpd2: unknown | null;
    conversion: number;
    rankInfo: RankInfo;
    roi: Record<string, number>;
    productFields: Record<string, unknown>;
    applyWatermark: boolean;
    moderationBlockReason: StringNullable;
    blockReason: StringNullable;
    blockComment: StringNullable;
    dateModerated: null;
    blockReasons: [];
    skusHasAllRequiredFilters: true;
    allFiltersFilled: boolean;
    hasAnySkuBlocked: boolean;
    wantToPhotoStudio: null;
    isIlliquid: boolean;
    customCharacteristicClosed: boolean;
    productCertificates: unknown[];
    switchbackActive: boolean;
    promotionStatus: string;
    categoryEditable: boolean;
    keSeller: boolean;
    pstorage: boolean;
  }
}
