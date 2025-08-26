import { IPaginatedResponse } from "@/modules/alif-shop-api/common/interfaces";

export declare namespace ApplicationsEntity {
  export type Sources =
    | "MERCHANT"
    | "MERCHANT_MOBILE"
    | "ALIFSHOP"
    | "ALIFSHOP_MOBILE"
    | "ALIFMOBI"
    | "ALIFSHOP_MINI_APP"
    | "ONLINE"
    | "E-COMMERCE"
    | "COMPLIANCE";

  export type Statuses = "NEW" | "REVIEWING" | "APPROVED" | "REJECTED" | "COMPLETED" | "CANCELLED" | "DELETED" | "TO_DELIVERY";

  export interface Deliverable {
    id: number;
    deliverable_type: string;
    deliverable_id: number;
    type: string;
    type_service: string;
    created_at: string;
    sender: {
      location: {
        city: string;
        region: string;
        street: string;
        district: string;
        index_id: unknown | null;
        point_id: unknown | null;
      };
      sender_info: {
        name: string;
        contact_phone: string;
        contact_person: string;
      };
    };
    receiver: {
      location: {
        city: string;
        region: string;
        street: string;
        district: string;
        index_id: unknown | null;
        latitude: unknown | null;
        point_id: unknown | null;
        longitude: unknown | null;
      };
      receiver_info: {
        contact_phone: string;
        contact_person: string;
      };
    };
    status: {
      id: number;
      key: string;
      name_ru: string;
      name_uz: string;
    };
    status_tag: {
      key: string;
      value: string;
      body_ru: string;
      body_uz: string;
    };
    products_info: [
      {
        name: string;
        price: number;
      },
    ];
    alif_delivery: {
      application_id_from_alif_delivery: string;
      alif_delivery_status_key: string;
      driver_id: number;
    };
    delivery_status_id: number;
    alif_delivery_order_id: string;
    date_pickup: string;
    weight: number;
    volume: number;
    entity_created_at: string;
  }

  export interface ApplicationStatus {
    id: number;
    key: Statuses;
    title_ru: string;
    body: string;
    class: string;
    order: number;
  }

  export interface ApplicationClient {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    phone: string;
    client_status_key: "IDENTIFIED";
  }

  export interface ApplicationPurchaseStatus {
    id: number;
    application_id: number;
    status: string;
    created_at: string;
    updated_at: string;
  }

  export interface Application {
    id: number;
    application_id: number;
    good_name: string;
    good: {
      name: string;
    };
    good_type: {
      id: number;
      name: string;
      is_markable: boolean;
    };
    good_type_id: number;
    price: number;
    quantity: number;
    sku: string;
    ikpu: string;
    warehouse_item_id: number;
    marking: unknown | null;
    imeis: unknown[];
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  }

  export interface ApplicationProduct {
    amount: number;
    application_condition_id: number;
    application_status: ApplicationsEntity.ApplicationStatus;
    application_status_key: ApplicationsEntity.Statuses;
    auto: boolean;
    auto_review: boolean;
    cancel_reason: number | null;
    client: ApplicationsEntity.ApplicationClient;
    client_id: number;
    commission: number;
    created_at: string;
    created_by_id: number;
    created_from_str: string;
    down_payment_amount: number;
    down_payment_hold: null;
    duration: number;
    engaged_at: null;
    engaged_by_id: null;
    extra_days: number;
    file_id: null;
    first_payment_date: string | null;
    hidden: boolean;
    invoice_id: null;
    id: number;
    merchant_engaged_at: string;
    merchant_engaged_by_str: string;
    merchant_engaged_by_id: number;
    merchant_id: number;
    merchant_note: null;
    note: null;
    prepayment: number;
    reject_reason: null;
    status_updated_at: string;
    store_id: number;
    type: "full";
    updated_at: string;
    updated_by_id: 1;
    updated_from_str: "CRM" | "CREDITS" | (string & {});
    confirmed_by_merchant: false;
  }

  export interface SingleApplicationProduct extends ApplicationProduct {
    contract: unknown | null;
    application_items: Application[];
    alif_purchase_status: ApplicationPurchaseStatus;
  }
}

export declare namespace ApplicationsApi {
  export namespace List {
    export type Response = IPaginatedResponse<ApplicationsEntity.ApplicationProduct[]>;
  }

  export namespace Single {
    export type Response = ApplicationsEntity.SingleApplicationProduct;
  }

  export namespace DeliverableList {
    export interface Response {
      data: ApplicationsEntity.Deliverable[];
    }
  }
}
