import { UsernamePasswordParams } from "@/common";

export interface TokenParams extends UsernamePasswordParams {
  grant_type?: "password" | "refresh_token";
  refresh_token?: string;
}
