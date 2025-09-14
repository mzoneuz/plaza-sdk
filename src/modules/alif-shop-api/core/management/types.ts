export declare namespace AlifManagementEntity {
  export interface GeneratedReport {
    report_id: string;
    data: {
      type_id: number;
      datetime_from: string;
      datetime_to: string;
      app_id: number;
    };
    user: {
      name: string;
      id: number;
    };
    metadata: {
      created_at: string;
      message_id: string;
    };
  }

  export interface ReportItem {
    report_id: string;
    name: string;
    app_id: number;
    type_id: number;
    title: {
      ru: string;
      uz: string;
    };
    generated_at: string;
    datetime_from: string;
    datetime_to: string;
  }
}

export declare namespace AlifManagementApi {
  export namespace GenerateReport {
    export interface Request {
      type_id: number;
      datetime_from: string;
      datetime_to: string;
    }
    
    export type Response = AlifManagementEntity.GeneratedReport;
  }

  export namespace CheckReport {
    export interface Response {
      report_id: string;
      type_id: number;
      status: "IN_PROGRESS" | "SUCCESS";
    }
  }

  export namespace ReportsList {
    export type Response = AlifManagementEntity.ReportItem[];
  }
}
