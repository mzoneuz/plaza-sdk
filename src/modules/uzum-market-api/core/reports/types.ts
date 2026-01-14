export declare namespace ReportsEntity {
  export type ContentType = "MS_EXCEL" | "CSV" | "ZIP" | "PDF";

  export type SelectedRadioType = "7 days" | "30 days";

  export type SourceType = "Uzum Market" | "Логистика" | "Маркетинг" | "Подписка" | "Склад" | "Фотостудия" | "Центр подготовки товаров";

  export type EvenJobType = "SELLS_REPORT" | "EXPENSES_REPORT" | "LEFT_OUT_REPORT" | "MARKED_SALES_REPORT" | "PAID_STORAGE_REPORT";

  export type JobType =
    | "EXPENSES_REPORT"
    | "SELLS_REPORT"
    | "LEFT_OUT_REPORT"
    | "LEFT_OUT_REPORT_2024"
    | "MARKED_SALES_REPORT"
    | "SELLER_STORAGE_REPORT"
    | "COMMISSIONER_REPORT";

  export interface ReportParams {
    shopIds: number[];
    group?: boolean;
    dateTo?: number;
    dateFrom?: number;
    returns?: boolean;
    sources?: ReportsEntity.SourceType[];
    sellerId?: number;
  }

  export interface ReportResult {
    id: number;
    dateCreated: number;
    name: string | null;
    fileName: string;
    link: string;
  }

  export interface ReportData {
    requestId: number;
    status: "CREATED";
    failReason: null;
    jobType: ReportsEntity.JobType;
    result: ReportResult | null;
    dateStarted: number;
    params: ReportParams & {
      language: "ru" | "uz";
    };
  }
}

export declare namespace ReportsApi {
  export namespace CreateDocument {
    export interface Request {
      idempotencyKey: string;
      jobType: ReportsEntity.JobType;
      contentType: ReportsEntity.ContentType;
      selectedRadio?: ReportsEntity.SelectedRadioType;
      params: ReportsEntity.ReportParams;
    }

    export interface Response {
      payload: ReportsEntity.ReportData;
      timestamp: string;
    }
  }

  export namespace GetDocuments {
    export interface Response {
      payload: {
        requests: ReportsEntity.ReportData[];
        totalElements: number;
      };
      timestamp: string;
    }
  }
}
