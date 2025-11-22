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
}
