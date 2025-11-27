import { PlacementType, ResultResponse } from "@/modules/yandex-market-api/common";

export declare namespace ReportsApi {
  export namespace GenerateServiceReport {
    export interface Request {
      businessId: number;
      campaignIds?: number[];
      dateFrom?: string;
      dateTo?: string;
      inns?: string[];
      monthFrom?: number;
      monthTo?: number;
      placementPrograms?: PlacementType;
      yearFrom?: number;
      yearTo?: number;
    }

    export type Response = ResultResponse<{
      estimatedGenerationTime: number;
      reportId: string;
    }>;
  }

  export namespace GetSingleServiceReport {
    export type Response = ResultResponse<{
      generationRequestedAt: string;
      status: "PENDING" | "RPOCESSING" | "DONE" | "FAILED";
      estimatedGenerationTime: number;
      file: string;
      generationFinishedAt: string;
      subStatus: "NO_DATA" | "TOO_LARGE" | "RESOURCE_NOT_FOUND";
    }>;
  }
  export namespace GenerateSalesReport {
    export interface Request {
      businessId: number;
      dateFrom: string;
      dateTo: string;
      campaignIds?: number[];
      promoId?: string;
    }
    export type Response = ResultResponse<{
      reportId: string;
      estimatedGenerationTime: number;
    }>;
  }
}
