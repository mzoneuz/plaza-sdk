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
    app_id: 2;
    type_id: 12;
    title: {
      ru: "Товары";
      uz: "Tovarlar";
    };
    generated_at: "2025-08-27 14:45:18";
    datetime_from: "2025-08-11 00:00:00";
    datetime_to: "2025-08-24 00:00:00";
  }
}

export declare namespace AlifManagementApi {
  export namespace GenerateReport {
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
    export type Response = [
      {
        report_id: "ea6dfa38-5174-4dc1-96d8-652b2cc2a9eb";
        name: "merchants_service";
        app_id: 2;
        type_id: 12;
        title: {
          ru: "Товары";
          uz: "Tovarlar";
        };
        generated_at: "2025-08-27 14:45:18";
        datetime_from: "2025-08-11 00:00:00";
        datetime_to: "2025-08-24 00:00:00";
      },
      {
        report_id: "cb25e596-756b-493c-807e-f3b19a06c05a";
        name: "merchants_rejects";
        app_id: 2;
        type_id: 13;
        title: {
          ru: "Возвраты";
          uz: "Qaytarilgan tovarlar";
        };
        generated_at: "2024-12-03 16:29:07";
        datetime_from: "2023-11-01 00:00:00";
        datetime_to: "2023-11-30 00:00:00";
      },
      {
        report_id: null;
        name: "merchants_problem";
        app_id: 2;
        type_id: 16;
        title: {
          ru: "Проблемные клиенты";
          uz: "Muammoli mijozlar";
        };
        generated_at: null;
        datetime_from: null;
        datetime_to: null;
      },
      {
        report_id: "70fcb01d-ed08-4346-b09d-46d8798ae330";
        name: "merchants_delivery";
        app_id: 2;
        type_id: 29;
        title: {
          ru: "Доставки мерчанта";
          uz: "Hamkor yetkazmalari";
        };
        generated_at: "2025-08-27 15:04:00";
        datetime_from: "2025-08-01 00:00:00";
        datetime_to: "2025-08-28 00:00:00";
      },
    ];
  }
}
