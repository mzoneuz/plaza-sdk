import { ApiKeyParams } from "@/common";

export interface GetBusinessSettingsParams extends ApiKeyParams {
  businessId: number;
}
