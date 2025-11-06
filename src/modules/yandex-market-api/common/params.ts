import { ApiKeyParams } from "@/common";

export interface CampaignIdBasedParams extends ApiKeyParams {
  campaignId: number;
}

export interface PagedParams extends ApiKeyParams {
  page?: number;
  pageSize?: number;
}

export interface TokenPagedParams extends ApiKeyParams {
  limit?: number;
  page_token?: string;
}