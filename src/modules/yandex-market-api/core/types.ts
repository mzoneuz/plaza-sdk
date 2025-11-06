import { AddressGps } from "@/common";
import * as CommonTypes from "@/modules/yandex-market-api/common";

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
    placementType: CommonTypes.PlacementType;
    apiAvailability: "AVAILABLE" | "DISABLED_BY_INACTIVITY";

    // for personal use
    apiKey?: string;
  }

  export interface CampaignStock {
    type: CommonTypes.CampaignStockType;
    count: number;
  }

  export interface CampaignOffer {
    offerId: string;
    stocks: CampaignStock[];
    turnoverSummary?: {
      turnover: CommonTypes.Turnover;
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
    weightDimensions: CommonTypes.Dimensions;
    guaranteePeriod: CommonTypes.TimePeriod;
    commodityCodes: CommonTypes.CommodityCode[];
    basicPrice: {
      value: number;
      currencyId: CommonTypes.CurrencyType;
      discountBase: number;
      updatedAt: string;
    };
    cardStatus: string;
    campaigns: CampaignMinimal[];
    sellingPrograms: Array<{ sellingProgram: CommonTypes.PlacementType; status: "FINE" | "REJECT" }>;
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

  export interface Promo {
    subsidy: number;
    type: string;
    discount: number;
    marketPromoId: string;
    shopPromoId: string;
  }

  export interface Subsidy {
    type: "YANDEX_CASHBACK" | "SUBSIDY" | "DELIVERY";
    amount: number;
  }

  export interface Address {
    apartment: string;
    block: string;
    postcode: string;
    building: string;
    country: string;
    city: string;
    district: string;
    street: string;
    house: string;
    entrance: string;
    entryphone: string;
    phone: string;
    estate: string;
    floor: string;
    recipient: string;
    subway: string;
    gps?: AddressGps;
  }

  export interface ShipmentBox {
    id: number;
    fulfilmentId: string;
  }

  export interface ShipmentTrack {
    deliveryServiceId: number;
    trackCode: string;
  }

  export interface Shipment {
    /** @deprecated No longer supported, please use an alternative and newer version. */
    id: number;
    shipmentDate: string;
    shipmentTime: string;
    tracks: ShipmentTrack[];
    boxes: ShipmentBox[];
  }

  export interface DeliveryDates {
    fromDate: string;
    toDate: string;
    fromTime: string;
    toTime: string;
    realDeliveryDate: string;
  }

  export interface Courier {
    fullName: string;
    phone: string;
    phoneExtension: string;
    vehicleDescription: string;
    vehicleNumber: string;
  }

  export interface Region {
    id: number;
    name: string;
    type: string;
    parent?: Region;
  }

  export interface Delivery {
    /** @deprecated No longer supported, please use an alternative and newer version. */
    id: string;
    /** @deprecated No longer supported, please use an alternative and newer version. */
    price: number;
    serviceName: string;
    dates: DeliveryDates;
    type: CommonTypes.OrderDeliveryType;
    deliveryPartnerType: CommonTypes.OrderDeliveryPartnerType;
    region: Region;
    address: Address;
    courier: Courier;
    dispatchType: string;
    deliveryServiceId: number;
    liftPrice: number;
    liftType: string;
    eacCode: string;
    eacType: string;
    estimated: boolean;
    outletCode: string;
    outletStorageLimitDate: string;
    shipments: Shipment[];
    tracks: ShipmentTrack[];
    vat: CommonTypes.VatValue;
  }



  export interface Buyer {
    type: CommonTypes.OrderBuyerType;
    id: string;
    middleName: string;
  }

  export interface CampaignOrderItem {
    id: number;
    offerId: string;
    offerName: string;
    price: number;
    buyerPrice: number;
    buyerPriceBeforeDiscount: number;
    priceBeforeDiscount: number;
    count: number;
    vat: string;
    shopSku: string;
    subsidy: number;
    partnerWarehouseId: string;
    promos: Promo[];
    subsidies: Subsidy[];
  }

  export interface CampaignOrder {
    id: number;
    status: CommonTypes.OrderStatus;
    substatus: CommonTypes.OrderSubstatus;
    creationDate: string;
    updatedAt: string;
    currency: CommonTypes.CurrencyType;
    itemsTotal: number;
    deliveryTotal: number;
    /** @deprecated No longer supported, please use an alternative and newer version. */
    buyerItemsTotal: number;
    /** @deprecated No longer supported, please use an alternative and newer version. */
    buyerTotal: number;
    buyerItemsTotalBeforeDiscount: number;
    /** @deprecated No longer supported, please use an alternative and newer version. */
    buyerTotalBeforeDiscount: number;
    paymentType: "PREPAID" | "POSTPAID" | "UNKNOWN";
    paymentMethod: string;
    fake: boolean;
    items: CampaignOrderItem[];
    subsidies: Subsidy[];
    delivery: Delivery;
    buyer: Buyer;
    taxSystem: string;
    cancelRequested: boolean;
    expiryDate: string;
    externalOrderId: string;
    notes: string;
  }
}
