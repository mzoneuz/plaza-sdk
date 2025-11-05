import { CommodityCode, Dimensions, TimePeriod } from "@/modules/yandex-market-api/common/interfaces";
import { CampaignStockType, CurrencyType, PlacementType, Turnover } from "@/modules/yandex-market-api/common/types";

export declare namespace YandexMarketEntity {
  export interface Business {
    id: number;
    name: string;
  }

  export interface CampaignMinimal {
    campaignId: number;
    status: string;
  }

  export interface Campaign {
    id: number;
    domain: string;
    clientId: number;
    business: Business;
    placementType: PlacementType;
    apiAvailability: "AVAILABLE" | "DISABLED_BY_INACTIVITY";

    // for personal use
    apiKey?: string;
  }

  export interface CampaignStock {
    type: CampaignStockType;
    count: number;
  }

  export interface CampaignOffer {
    offerId: string;
    stocks: CampaignStock[];
    turnoverSummary?: {
      turnover: Turnover;
      turnoverDays: number;
    };
    updatedAt?: string;
  }

  export interface OfferWarehouse {
    warehouseId: number;
    offers: CampaignOffer[];
  }

  export interface MediaFileOffer {
    title?: string;
    url: string;
    uploadState: "UPLOADING" | "UPLOADED" | "FAILED";
  }

  export interface BusinessOffer {
    offerId: string;
    name: string;
    pictures: string[];
    vendor: string;
    barcodes: string[];
    description: string;
    weightDimensions: Dimensions;
    guaranteePeriod: TimePeriod;
    commodityCodes: CommodityCode[];
    basicPrice: {
      value: number;
      currencyId: CurrencyType;
      discountBase: number;
      updatedAt: string;
    };
    cardStatus: string;
    campaigns: CampaignMinimal[];
    sellingPrograms: Array<{ sellingProgram: PlacementType; status: "FINE" | "REJECT" }>;
    mediaFiles: {
      firstVideoAsCover?: boolean;
      pictures: MediaFileOffer[];
      videos: MediaFileOffer[];
      manuals: MediaFileOffer[];
    };
    groupId: string;
  }

  export interface BusinessMapping {
    marketSku: number;
    marketSkuName: string;
    marketModelId: number;
    marketModelName: string;
    marketCategoryId: number;
    marketCategoryName: string;
  }

  export interface MappingShowcaseUrl {
    showcaseType: "B2B" | "B2C";
    showcaseUrl: string;
  }
}
