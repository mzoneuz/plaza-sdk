import { UsernamePasswordParams } from "@/common";

export type GetTokenParams = UsernamePasswordParams;

export interface RefreshTokenParams {
  refresh_token: string;
}
