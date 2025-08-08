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

  export interface ApplicationStatus {
    id: number;
    key: "APPROVED";
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

  export interface Application {
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
}

export declare namespace ApplicationsApi {
  export namespace List {
    export type Response = IPaginatedResponse<ApplicationsEntity.Application[]>;
  }
}
