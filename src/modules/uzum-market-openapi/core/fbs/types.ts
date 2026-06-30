export declare namespace FbsEntity {
  export interface SkuAmountItem {
    skuId: number;
    skuTitle: string;
    productTitle: string;
    barcode: string;
    amount: number;
    fbsAllowed: boolean;
    dbsAllowed: boolean;
    fbsLinked: boolean;
    dbsLinked: boolean;
  }
}

export declare namespace FbsEntity {
  export interface ProductImage {
    photo: unknown;
    photoKey: string;
    color: string;
    hasVerticalPhoto: boolean;
  }

  export interface OrderItem {
    id: number;
    status: "TO_WITHDRAW" | "PROCESSING" | "CANCELED" | "PARTIALLY_CANCELLED";
    /** Unix epoch ms */
    date: number;
    orderId: number;
    skuTitle: string;
    productId: number;
    productImage: ProductImage | null;
    shopId: number;
    /** Unix epoch ms */
    dateIssued: number;
    sellerPrice: number;
    amount: number;
    amountReturns: number;
    commission: number;
    sellerProfit: number;
    purchasePrice: number;
    logisticDeliveryFee: number;
    cancelled: number;
    withdrawnProfit: number;
    returnCause: string | null;
    comment: string | null;
    skuCharValue: string | null;
    skuCharTitle: string | null;
    productTitle: string;
  }

  export interface Stock {
    id: number;
    externalId: string | null;
    title: string;
    address: string;
    timeFrom: string | null;
    timeTo: string | null;
    poolSource: string | null;
    dimensionalGroups: unknown[];
  }

  export interface TimeSlot {
    timeFrom: string;
    timeTo: string;
  }

  export interface DropOffPoint {
    uuid: string;
    address: string;
    type:
      | "UNKNOWN"
      | "STOCK"
      | "ISSUE_POINT"
      | "UZ_POST"
      | "UCELL"
      | "NOT_UZUM"
      | "PHOTO_STUDIO"
      | "CROSS_DOCK"
      | "DROP_OFF_POINT"
      | "SORT_CENTER";
  }

  export interface DeliveryInfo {
    deliveryAddress: string | null;
    customerFullname: string | null;
    customerPhone: string | null;
    deliveryComment: string | null;
  }

  export interface Order {
    id: number;
    status: "CREATED" | "PACKING" | "DELIVERED" | "DELIVERED_TO_CUSTOMER_DELIVERY_POINT" | "COMPLETED" | "CANCELED" | "PENDING_CANCELLATION" | "RETURNED";
    dateCreated: string;
    acceptUntil: string | null;
    deliverUntil: string | null;
    deliveringDate: string | null;
    deliveryDate: string | null;
    acceptedDate: string | null;
    deliveredToDeliveryPointDate: string | null;
    completedDate: string | null;
    dateCancelled: string | null;
    returnDate: string | null;
    cancelReason: string | null;
    identifierRequired: boolean;
    price: number;
    shopId: number;
    stock: Stock | null;
    orderItems: OrderItem[];
    place: string | null;
    invoiceNumber: number | null;
    timeSlot: TimeSlot | null;
    dropOffPoint: DropOffPoint | null;
    scheme: "FBS" | "DBS" | "FBO";
    deliveryInfo: DeliveryInfo | null;
  }

  export interface ApiError {
    code: string;
    message: string;
    detailMessage: string;
    payload: object;
  }
}

export declare namespace FbsApi {
  export namespace FbsOrdersList {
    export interface Response {
      payload: {
        orders: FbsEntity.Order[];
        /** Berilgan filtr bo'yicha umumiy zakazlar soni — paginatsiya uchun */
        totalAmount: number;
      };
      errors?: FbsEntity.ApiError[];
      timestamp: string;
      trace?: string;
      error?: string | null;
    }
  }

  export namespace FbsOrdersCount {
    export interface Response {
      /** Zakazlar soni (long) */
      payload: number;
      errors?: FbsEntity.ApiError[];
      timestamp: string;
      trace?: string;
      error?: string | null;
    }
  }

  export namespace FbsStocksList {
    export interface Response {
      payload: {
        skuAmountList: FbsEntity.SkuAmountItem[];
      };
      timestamp: string;
    }
  }

  export namespace EditFbsStocks {
    export interface Request {
      skuAmountList: Partial<Omit<FbsEntity.SkuAmountItem, "fbsAllowed" | "dbsAllowed">>[];
    }

    export interface Response {
      payload: {
        totalRecords: number;
        updatedRecords: number;
      };
      timestamp: string;
    }
  }
}
